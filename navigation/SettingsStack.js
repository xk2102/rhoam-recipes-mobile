// ./navigation/SettingsStack.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Settings from "../screens/Settings";
import Header from "../shared/Header";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{ headerStyle: { backgroundColor: "#5e4740" }, headerTitle: () => <Header /> }} />
    </Stack.Navigator>
  );
};

export { SettingsStack };
