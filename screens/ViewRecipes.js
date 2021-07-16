// ./screens/ViewRecipe.js

import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import { Settings } from "../contexts/Settings";
import RecipeDetails from "./RecipeDetails";

const ViewRecipes = ({ navigation }) => {
  const { listOfRecipes } = useContext(Settings);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Select a recipe..!</Text>

      <ScrollView>
        {listOfRecipes.length > 0 &&
          listOfRecipes.map((recipe, index) => (
            <TouchableOpacity style={styles.cardView} key={index} onPress={() => navigation.navigate("RecipeDetails", { recipe: recipe })}>
              <Text style={styles.cardText}>{recipe.name}</Text>
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
export default ViewRecipes;
