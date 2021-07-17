import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import { globalStyles } from "../styles/global";

const SelectIngredient = ({ route, navigation }) => {
  const { listOfIngredients } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.titleText, { textAlign: "center" }]}>List of ingredients: </Text>
      <ScrollView>
        {listOfIngredients.map((ingredient, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cardView}
            onPress={() => {
              navigation.navigate({
                name: "RecipeDetails",
                params: { selectedIngredient: ingredient.name },
                merge: true,
              });
            }}>
            <Text style={styles.cardText}>{`${ingredient.name} (${ingredient.quantity} grams)`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 10,
    backgroundColor: "#5e4740",
    marginBottom: 5,
    padding: 10,
  },
  cardText: {
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    color: "#e0d4d1",
    textAlign: "center",
  },
});

export default SelectIngredient;
