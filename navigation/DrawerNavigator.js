// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { AboutStack } from "./AboutStack";
import { HomeStack } from "./HomeStack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
