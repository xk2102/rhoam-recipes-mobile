import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Ingredients = ({ recipe, multiplier, expectedNewTotalSum, option }) => {
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
    <View style={{ padding: 20 }}>
      {option === 1 && (
        <>
          <Text style={globalStyles.titleText}>New ingredients:</Text>
          {recipe.listOfIngredients.map((ingredient, index) => (
            <Text style={globalStyles.contentText} key={index}>{`${index + 1}. ${ingredient.name} (${(ingredient.quantity * multiplier).toFixed(0)} grams)`}</Text>
          ))}

          <Text style={globalStyles.contentText}>
            <Text style={globalStyles.titleText}>New ingredients total sum: </Text>
            {`${(totalIngredientSum * multiplier).toFixed(0)} grams`}
          </Text>
        </>
      )}

      {option === 2 && (
        <>
          <Text style={globalStyles.titleText}>New ingredients:</Text>
          {recipe.listOfIngredients.map((ingredient, index) => (
            <Text style={globalStyles.contentText} key={index}>{`${index + 1}. ${ingredient.name} (${((ingredient.quantity * expectedNewTotalSum) / totalIngredientSum).toFixed(0)} grams)`}</Text>
          ))}

          <Text style={globalStyles.contentText}>
            <Text style={globalStyles.titleText}>New ingredients total sum: </Text>
            {`${expectedNewTotalSum} grams`}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ingredients;
