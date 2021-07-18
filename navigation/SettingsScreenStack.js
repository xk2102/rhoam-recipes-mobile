// ./navigation/SettingsScreenStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from "../screens/SettingsScreen";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const SettingsScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <Header /> }} />
    </Stack.Navigator>
  );
};

export { SettingsScreenStack };
