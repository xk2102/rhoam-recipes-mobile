// ./screens/RecipeDetails.js

import React, { useContext, useEffect, useState } from "react";
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import Recipe from "../components/Recipe";

const RecipeDetails = ({ route, navigation }) => {
  const { recipe } = route.params;
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Text style={globalStyles.titleText}>{recipe.name}</Text>
        <Recipe recipe={recipe}></Recipe>
        <CustomButton text="Back" navigation={navigation}></CustomButton>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default RecipeDetails;
