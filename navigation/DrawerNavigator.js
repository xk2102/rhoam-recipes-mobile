// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { SettingsScreensStack } from "./SettingsScreenStack";
import { HomeStack } from "./HomeStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Settings" component={SettingsScreenStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
