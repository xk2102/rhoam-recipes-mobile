// ./screens/RecipeDetails.js

import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import Recipe from "../components/Recipe";
import Ingredients from "../components/Ingredients";
import ErrorText from "../components/ErrorText";

const RecipeDetails = ({ route, navigation }) => {
  const { recipe } = route.params;
  useEffect(() => {
    if (route.params?.selectedIngredient) {
      setSelectedIngredient(route.params.selectedIngredient);
      setExpectedIngredientQuantity(0);
      setMultiplier(1);
    }
  }, [route.params?.selectedIngredient]);
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [expectedIngredientQuantity, setExpectedIngredientQuantity] = useState(0);
  const [expectedNewTotalSum, setExpectedNewTotalSum] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [error, setError] = useState("");

  // // ----------------------------------------------------------------
  // // -- FORM HANDLERS------------------------------------------------
  // // ----------------------------------------------------------------
  const handleExpectedIngredientQuantity = (value) => {
    setExpectedIngredientQuantity(value);
    const originalQuantity = recipe.listOfIngredients.find(({ name }) => name === selectedIngredient).quantity;
    setMultiplier(parseFloat(value) / originalQuantity);
  };
  const handleExpectedNewTotalSum = (value) => {
    if (value < 0) {
      setError("Invalid QUANTITY! Should be greater than zero..");
    } else {
      setError("");
      setExpectedNewTotalSum(value);
    }
  };
  // // ----------------------------------------------------------------
  // // -- LOGIC FUNCTIONS ---------------------------------------------
  // // ----------------------------------------------------------------

  const onPress_resetViewRecipes = () => {
    setSelectedIngredient("");
    setExpectedIngredientQuantity(0);
    setExpectedNewTotalSum(0);
    setMultiplier(1);
    setError("");
  };
  // // ----------------------------------------------------------------
  // // -- RETURN -------------------------------------------------------
  // // ----------------------------------------------------------------

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.titleText}>{recipe.name}</Text>
        <Recipe recipe={recipe} multiplier={multiplier}></Recipe>

        <Text style={globalStyles.titleText}>Actions: </Text>

        {/* will only show option 1 if i have not started option 2 */}

        {expectedNewTotalSum === 0 && (
          <>
            <TouchableOpacity style={globalStyles.customButtonView} onPress={() => navigation.navigate("SelectIngredient", { listOfIngredients: recipe.listOfIngredients })}>
              {selectedIngredient === "" ? <Text style={globalStyles.customButtonText}>Select an ingredient</Text> : <Text style={globalStyles.customButtonText}>Select a different ingredient</Text>}
            </TouchableOpacity>

            {selectedIngredient !== "" && (
              <>
                <View style={styles.field}>
                  <Text style={styles.fieldLabel}>Expected quantity (grams) for {selectedIngredient}: </Text>
                  <TextInput style={styles.fieldInput} keyboardType="numeric" value={expectedIngredientQuantity} onChangeText={(value) => handleExpectedIngredientQuantity(value)}></TextInput>
                </View>

                <View style={{ backgroundColor: "#5e4740", margin: 20, borderRadius: 10 }}>
                  {multiplier !== 1 && expectedIngredientQuantity !== "" && !isNaN(expectedIngredientQuantity) && <Ingredients option={1} recipe={recipe} multiplier={multiplier}></Ingredients>}
                </View>
              </>
            )}
          </>
        )}

        {/* will only show option 2 if i have not started option 1 */}
        {selectedIngredient === "" && (
          <>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>OR input expected new total sum: </Text>
              <TextInput style={styles.fieldInput} keyboardType="numeric" value={expectedNewTotalSum} onChangeText={(value) => handleExpectedNewTotalSum(value)}></TextInput>
            </View>

            {error === "Invalid QUANTITY! Should be greater than zero.." && <ErrorText type={"red"} text={"Invalid QUANTITY! Should be greater than zero.."}></ErrorText>}

            <View style={{ backgroundColor: "#5e4740", margin: 20, borderRadius: 10 }}>
              {expectedNewTotalSum !== 0 && <Ingredients option={2} recipe={recipe} expectedNewTotalSum={expectedNewTotalSum}></Ingredients>}
            </View>
          </>
        )}

        <TouchableOpacity style={globalStyles.customButtonView} onPress={onPress_resetViewRecipes}>
          <Text style={globalStyles.customButtonText}>Reset</Text>
        </TouchableOpacity>
        <CustomButton text="Back" navigation={navigation}></CustomButton>
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
export default RecipeDetails;
