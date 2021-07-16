// ./navigation/ViewRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ViewRecipes from "../screens/ViewRecipes";
import Header from "../shared/Header";
import HeaderNested from "../shared/HeaderNested";
import RecipeDetails from "../screens/RecipeDetails";

const Stack = createStackNavigator();

const ViewRecipesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ViewRecipes" component={ViewRecipes} options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <Header /> }} />
      <Stack.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <HeaderNested info="RecipeDetails" />, headerTintColor: "#ffffff", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export { ViewRecipesStack };
