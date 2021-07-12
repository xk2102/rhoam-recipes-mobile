// ./screens/CreateRecipe.js

import React, { useState, useContext, useEffect } from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import { Settings } from "../contexts/Settings";
import ErrorText from "../components/ErrorText";
import { resetRecipe } from "../utils/logicFunctions";
import { logOutUser } from "../utils/userFunctions";
import { postRecipe } from "../utils/apiCalls";

const CreateRecipe = () => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const { apiUrl, userCredentials, setUserCredentials } = useContext(Settings);
  const [recipe, setRecipe] = useState({
    name: "",
    info: "",
    author: "",
    listOfIngredients: [
      {
        name: "",
        quantity: 0,
        unitOfMeasurement: "grams",
      },
    ],
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    listOfSteps: [
      {
        description: "",
      },
    ],
    id: "",
  });
  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  const [error, setError] = useState("");
  // // ----------------------------------------------------------------
  // // -- FORM HANDLERS------------------------------------------------
  // // ----------------------------------------------------------------
  function handleListOfIngredients(action) {
    if (action === "pop" && recipe.listOfIngredients.length > 1) {
      let temp = [...recipe.listOfIngredients];
      temp.pop();
      setRecipe((prevRecipe) => ({ ...prevRecipe, listOfIngredients: temp }));
    } else if (action === "push") {
      // push
      let temp = [...recipe.listOfIngredients];
      temp.push({
        name: "",
        quantity: 0,
        unitOfMeasurement: "grams",
      });
      setRecipe((prevRecipe) => ({ ...prevRecipe, listOfIngredients: temp }));
    }
  }

  function handleIngredient(value, index, what) {
    let temp = [...recipe.listOfIngredients];
    what === "quantity" ? (temp[index][what] = parseInt(value, 10)) : (temp[index][what] = value);

    setRecipe((prevRecipe) => ({ ...prevRecipe, listOfIngredients: temp }));
  }

  function handleListOfSteps(action) {
    if (action === "pop" && recipe.listOfSteps.length > 1) {
      let temp = [...recipe.listOfSteps];
      temp.pop();
      setRecipe((prevRecipe) => ({ ...prevRecipe, listOfSteps: temp }));
    } else {
      let temp = [...recipe.listOfSteps];
      temp.push({
        description: "",
      });
      setRecipe((prevRecipe) => ({ ...prevRecipe, listOfSteps: temp }));
    }
  }
  function handleStepDescription(value, index) {
    let temp = [...recipe.listOfSteps];
    temp[index].description = value;
    setRecipe((prevRecipe) => ({ ...prevRecipe, listOfSteps: temp }));
  }

  function handleRecipeFields(value, what) {
    if (what === "name") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [what]: value,
      }));
    }
    if (what === "info") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [what]: value,
      }));
    }
    if (what === "prepTime") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [what]: parseInt(value, 10),
      }));
    }
    if (what === "cookTime") {
      setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [what]: parseInt(value, 10),
      }));
    }
  }
  // // ----------------------------------------------------------------
  // // -- LOGIC FUNCTIONS ---------------------------------------------
  // // ----------------------------------------------------------------
  const onPress_resetRecipe = () => {
    setRecipe(resetRecipe);
    setError("");
  };

  const onPress_createRecipe = () => {
    // VALIDATE
    let isValidated = (function () {
      let _error = "";
      if (recipe.name === "") {
        _error = "Invalid NAME! Should not be empty..";
      }
      if (recipe.prepTime === 0) {
        _error = "Invalid PREP TIME! Should not be zero..";
      }
      if (recipe.cookTime === 0) {
        _error = "Invalid COOK TIME! Should not be zero..";
      }
      for (let ingredient of recipe.listOfIngredients) {
        if (ingredient.name === "") {
          _error = "Invalid INGREDIENT NAME! Should not be empty..";
        }
        if (ingredient.quantity === 0) {
          _error = "Invalid INGREDIENT QUANTITY! Should not be zero..";
        }
      }
      for (let step of recipe.listOfSteps) {
        if (step.description === "") {
          _error = "Invalid STEP DESCRIPTION! Should not be empty..";
        }
      }

      if (_error === "") {
        console.log("createRecipe.js - isValidated() - validated!");
        return true;
      } else {
        setError(_error);
        return false;
      }
    })();

    if (isValidated) {
      const r = {
        ...recipe,
        author: userCredentials.userName,
      };

      apiResponse_postRecipe(r);
      setRecipe(resetRecipe);
    } // is validated
  }; // onSubmit_createRecipe

  function tokenExpired_logOutUser() {
    setUserCredentials(logOutUser);
  }

  // // ----------------------------------------------------------------
  // // -- API RESPONSES -----------------------------------------------
  // // ----------------------------------------------------------------
  const apiResponse_postRecipe = (r) => {
    const fetchPromise = postRecipe(apiUrl, userCredentials.token, r);
    fetchPromise
      .then((response) => {
        if (response.status === 500) {
          console.log("createRecipe.js - apiResponse_postRecipe - status 500: internal server error..!");
          setError("ERROR: internal server error..!");
        }
        if (response.status === 201) {
          console.log("createRecipe.js - apiResponse_postRecipe - status 201: recipe created and saved!");
          return response.json();
        }
        if (response.status === 401) {
          console.log("createRecipe.js - apiResponse_postRecipe - status 401: auth error, token probably expired!");
          tokenExpired_logOutUser();
          return response.json();
        }
      })
      .catch((error) => {
        console.log(`createRecipe.js - apiResponse_postRecipe - promise error: ${error}`);
      });
  };

  // // ----------------------------------------------------------------
  // // -- RETURN -------------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        {userCredentials.isLoggedIn && <Text style={[globalStyles.contentText, { textAlign: "right" }]}>{`[Logged in as: ${userCredentials.userName}]`}</Text>}

        <Text style={globalStyles.titleText}>Create a recipe..!</Text>

        {!userCredentials.isLoggedIn && (
          <>
            <Text style={globalStyles.contentText}>Remember, you must be logged in to save a new recipe..!</Text>
            <Text style={globalStyles.contentText}>Follow this link to log in..!</Text>
          </>
        )}

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Name: </Text>
          <TextInput style={styles.fieldInput} value={recipe.name} onChangeText={(value) => handleRecipeFields(value, "name")}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Info: </Text>
          <TextInput style={styles.fieldInput} value={recipe.info} onChangeText={(value) => handleRecipeFields(value, "info")}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Prep time (mins): </Text>
          <TextInput style={styles.fieldInput} value={recipe.prepTime} onChangeText={(value) => handleRecipeFields(value, "prepTime")} keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Cook time (mins): </Text>
          <TextInput style={styles.fieldInput} value={recipe.cookTime} onChangeText={(value) => handleRecipeFields(value, "cookTime")} keyboardType="numeric"></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Ingredients: </Text>
        </View>
        {recipe.listOfIngredients.length > 0 &&
          recipe.listOfIngredients.flatMap((ingredient, index) => (
            <View style={styles.field} key={index}>
              <Text style={[styles.fieldLabel, { width: "10%" }]}>{index + 1 + `) `}</Text>
              <TextInput value={ingredient.name} style={[styles.fieldInput, { width: "50%" }]} onChangeText={(value) => handleIngredient(value, index, "name")}></TextInput>
              <TextInput
                value={ingredient.quantity}
                style={[styles.fieldInput, { width: "20%" }]}
                onChangeText={(value) => handleIngredient(value, index, "quantity")}
                keyboardType="numeric"></TextInput>
              <TextInput value={"grams"} style={[styles.fieldInput, { width: "20%" }]} editable={false}></TextInput>
            </View>
          ))}
        <View style={styles.field}>
          <TouchableOpacity style={[globalStyles.customButtonView, { width: "50%" }]} onPress={() => handleListOfIngredients("push")}>
            <Text style={globalStyles.customButtonText}>Add ingredient</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[globalStyles.customButtonView, { width: "50%" }]} onPress={() => handleListOfIngredients("pop")}>
            <Text style={globalStyles.customButtonText}>Remove ingredient</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Steps: </Text>
        </View>
        {recipe.listOfSteps.length > 0 &&
          recipe.listOfSteps.flatMap((step, index) => (
            <View style={styles.field} key={index}>
              <Text style={[styles.fieldLabel, { width: "10%" }]}>{index + 1 + `) `}</Text>
              <TextInput
                value={step.description}
                style={[styles.fieldInput, { width: "90%" }]}
                onChangeText={(value) => {
                  handleStepDescription(value, index);
                }}></TextInput>
            </View>
          ))}
        <View style={styles.field}>
          <TouchableOpacity style={[globalStyles.customButtonView, { width: "50%" }]} onPress={() => handleListOfSteps("push")}>
            <Text style={globalStyles.customButtonText}>Add step</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[globalStyles.customButtonView, { width: "50%" }]} onPress={() => handleListOfSteps("pop")}>
            <Text style={globalStyles.customButtonText}>Remove step</Text>
          </TouchableOpacity>
        </View>
        <ErrorText type="red" text={error}></ErrorText>
        <TouchableOpacity style={globalStyles.customButtonView} onPress={onPress_createRecipe}>
          <Text style={globalStyles.customButtonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.customButtonView} onPress={onPress_resetRecipe}>
          <Text style={globalStyles.customButtonText}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    // borderColor: "#fff",
    // borderWidth: 2,
    // borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  fieldLabel: {
    // borderColor: "#fff",
    // borderWidth: 2,
    // borderRadius: 10,
    width: "40%",
    padding: 10,
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    color: "#fff",
  },
  fieldInput: {
    // borderColor: "#fff",
    // borderWidth: 2,
    borderRadius: 10,
    width: "60%",
    padding: 10,
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    backgroundColor: "#fff",
  },
});

export default CreateRecipe;
