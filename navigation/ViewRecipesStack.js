// ./navigation/ViewRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ViewRecipes from "../screens/ViewRecipes";
import Header from "../shared/Header";
import HeaderNested from "../shared/HeaderNested";
import RecipeDetails from "../screens/RecipeDetails";
import SelectIngredient from "../screens/SelectIngredient";

const Stack = createStackNavigator();

const ViewRecipesStack = () => {
  return (
    <Stack.Navigator initialRouteName="ViewRecipes">
      <Stack.Screen name="ViewRecipes" component={ViewRecipes} options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <Header /> }} />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <HeaderNested info="RecipeDetails" />, headerTintColor: "#ffffff", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="SelectIngredient"
        component={SelectIngredient}
        options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <HeaderNested info="SelectIngredient" />, headerTintColor: "#ffffff", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export { ViewRecipesStack };
