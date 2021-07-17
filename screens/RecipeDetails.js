// ./screens/RecipeDetails.js

import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import Recipe from "../components/Recipe";
import Ingredients from "../components/Ingredients";

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
  const [multiplier, setMultiplier] = useState(1);

  // // ----------------------------------------------------------------
  // // -- FORM HANDLERS------------------------------------------------
  // // ----------------------------------------------------------------
  const handleExpectedIngredientQuantity = (value) => {
    setExpectedIngredientQuantity(value);
    const originalQuantity = recipe.listOfIngredients.find(({ name }) => name === selectedIngredient).quantity;
    setMultiplier(parseFloat(value) / originalQuantity);
  };
  // // ----------------------------------------------------------------
  // // -- LOGIC FUNCTIONS ---------------------------------------------
  // // ----------------------------------------------------------------

  // // ----------------------------------------------------------------
  // // -- RETURN -------------------------------------------------------
  // // ----------------------------------------------------------------

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.titleText}>{recipe.name}</Text>
        <Recipe recipe={recipe} multiplier={multiplier}></Recipe>
        <TouchableOpacity style={globalStyles.customButtonView} onPress={() => navigation.navigate("SelectIngredient", { listOfIngredients: recipe.listOfIngredients })}>
          {selectedIngredient === "" ? <Text style={globalStyles.customButtonText}>Select an ingredient</Text> : <Text style={globalStyles.customButtonText}>Select a different ingredient</Text>}
        </TouchableOpacity>

        {selectedIngredient !== "" && (
          <>
            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Expected quantity (grams) for {selectedIngredient}: </Text>
              <TextInput style={styles.fieldInput} keyboardType="numeric" value={expectedIngredientQuantity} onChangeText={(value) => handleExpectedIngredientQuantity(value)}></TextInput>
            </View>

            {multiplier !== 1 && expectedIngredientQuantity !== "" && !isNaN(expectedIngredientQuantity) && <Ingredients recipe={recipe} multiplier={multiplier}></Ingredients>}
          </>
        )}

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
