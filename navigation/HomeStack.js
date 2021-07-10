// ./navigation/HomeStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import LogIn from "../screens/LogIn";
import Header from "../shared/Header";
import HeaderNested from "../shared/HeaderNested";

const Stack = createStackNavigator(); 

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerStyle: {backgroundColor: "#7a5b52"} , headerTitle: () => <Header info="main"/>}} />
      <Stack.Screen name="LogIn" component={LogIn} options={{headerStyle: {backgroundColor: "#7a5b52"} , headerTitle: () => <HeaderNested info="LogIn"/>, headerTintColor: "#ffffff", headerTitleAlign: "center"}}/>
    </Stack.Navigator>
  );
}

export { HomeStack };