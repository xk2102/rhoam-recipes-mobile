import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Ingredients = ({ recipe, multiplier }) => {
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
      <Text style={globalStyles.titleText}>Ingredients:</Text>
      {recipe.listOfIngredients.map((ingredient, index) => (
        <Text style={globalStyles.contentText} key={index}>{`${index + 1}. ${ingredient.name} (${ingredient.quantity * multiplier} grams)`}</Text>
      ))}

      <Text style={globalStyles.contentText}>
        <Text style={globalStyles.titleText}>Ingredients total sum: </Text>
        {`${totalIngredientSum * multiplier} grams`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ingredients;
