// ./navigation/CreateRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateRecipe from "../screens/CreateRecipe";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const CreateRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateRecipe" component={CreateRecipe} options={{ headerStyle: { backgroundColor: "#7a5b52" }, headerTitle: () => <Header /> }} />
    </Stack.Navigator>
  );
};

export { CreateRecipeStack };
