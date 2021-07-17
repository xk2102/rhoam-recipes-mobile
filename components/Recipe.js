import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const Recipe = ({ recipe, multiplier }) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const [totalIngredientSum, setTotalIngredientSum] = useState(0);
  useEffect(() => {
    setTotalIngredientSum(() => {
      var total = 0;
      for (var a of recipe.listOfIngredients) {
        total += a.quantity;
      }
      return total;
    });
  }, [recipe]);

  return (
    <View>
      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Author: </Text>
        {recipe.author}
      </Text>
      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Info: </Text>
        {recipe.info}
      </Text>
      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Prep time: </Text>
        {recipe.prepTime}
        mins
      </Text>
      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Cook time: </Text>
        {recipe.cookTime}
        mins
      </Text>

      <Text style={globalStyles.titleText}>Ingredients:</Text>
      {recipe.listOfIngredients.map((ingredient, index) => (
        <Text style={globalStyles.contentText} key={index}>{`${index + 1}. ${ingredient.name} (${ingredient.quantity} grams)`}</Text>
      ))}

      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Ingredients total sum: </Text>
        {`${totalIngredientSum} grams`}
      </Text>

      <Text style={globalStyles.titleText}>Steps:</Text>
      {recipe.listOfSteps.map((step, index) => (
        <Text style={globalStyles.contentText} key={index}>{`${index + 1}. ${step.description}`}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Recipe;
