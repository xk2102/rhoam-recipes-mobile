// ./navigation/ViewRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ViewRecipe from "../screens/ViewRecipe";

const Stack = createStackNavigator();

const ViewRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ViewRecipe" component={ViewRecipe} />
    </Stack.Navigator>
  );
}

export { ViewRecipeStack };