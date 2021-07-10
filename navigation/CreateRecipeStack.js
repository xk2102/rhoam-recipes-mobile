// ./navigation/CreateRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateRecipe from "../screens/CreateRecipe";

const Stack = createStackNavigator();

const CreateRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateRecipe" component={CreateRecipe} />
    </Stack.Navigator>
  );
}

export { CreateRecipeStack };