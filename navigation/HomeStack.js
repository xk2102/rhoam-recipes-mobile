// ./navigation/HomeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import LogIn from "../screens/LogIn";
import Header from "../shared/Header";
import HeaderNested from "../shared/HeaderNested";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <Header /> }} />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <HeaderNested info="LogIn" />, headerTintColor: "#ffffff", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <HeaderNested info="Register" />, headerTintColor: "#ffffff", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
