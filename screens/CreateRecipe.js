// ./screens/CreateRecipe.js

import React, { useState, useContext, useEffect } from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import { Settings } from "../contexts/Settings";
import ErrorText from "../components/ErrorText";

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

  const [error, setError] = useState();
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
  // // -- RETURN -------------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.titleText}>Create a recipe..!</Text>
        <Text style={globalStyles.contentText}>Remember, you must be logged in to save a new recipe..!</Text>
        <Text style={globalStyles.contentText}>Follow this link to log in..!</Text>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Name: </Text>
          <TextInput style={styles.fieldInput}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Info: </Text>
          <TextInput style={styles.fieldInput}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Prep time (mins): </Text>
          <TextInput style={styles.fieldInput}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Cook time (mins): </Text>
          <TextInput style={styles.fieldInput}></TextInput>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Ingredients: </Text>
        </View>
        {recipe.listOfIngredients.length > 0 &&
          recipe.listOfIngredients.flatMap((ingredient, index) => (
            <View style={styles.field} key={index}>
              <Text style={[styles.fieldLabel, { width: "10%" }]}>{index + 1 + `) `}</Text>
              <TextInput value={ingredient.name} style={[styles.fieldInput, { width: "50%" }]} onChangeText={(value) => handleIngredient(value, index, "name")}></TextInput>
              <TextInput value={ingredient.quantity} style={[styles.fieldInput, { width: "20%" }]} onChangeText={(value) => handleIngredient(value, index, "quantity")}></TextInput>
              <TextInput value={"grams"} style={[styles.fieldInput, { width: "20%" }]}></TextInput>
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
          recipe.listOfSteps.flatMap((ingredient, index) => (
            <View style={styles.field} key={index}>
              <Text style={[styles.fieldLabel, { width: "10%" }]}>{index + 1 + `) `}</Text>
              <TextInput style={[styles.fieldInput, { width: "90%" }]}></TextInput>
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
        <TouchableOpacity style={globalStyles.customButtonView}>
          <Text style={globalStyles.customButtonText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.customButtonView}>
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
    color: "#e0d4d1",
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
