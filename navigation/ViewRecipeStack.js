// ./navigation/ViewRecipeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ViewRecipe from "../screens/ViewRecipe";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const ViewRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ViewRecipe" component={ViewRecipe} options={{ headerStyle: { backgroundColor: "#7a5b52" }, headerTitle: () => <Header /> }} />
    </Stack.Navigator>
  );
};

export { ViewRecipeStack };
