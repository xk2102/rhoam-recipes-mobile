// ./navigation/AboutStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={{ headerStyle: { backgroundColor: "#7a5b52" }, headerTitle: () => <Header /> }} />
    </Stack.Navigator>
  );
};

export { AboutStack };
