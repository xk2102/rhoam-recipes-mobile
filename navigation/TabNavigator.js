// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import { HomeStack } from "./HomeStack";
import { SettingsScreenStack } from "./SettingsScreenStack";
import { CreateRecipeStack } from "./CreateRecipeStack";
import { ViewRecipesStack } from "./ViewRecipesStack";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        // activeTintColor: "#ffffff",
        // inactiveTintColor: "#ffffff",
        activeBackgroundColor: "#5e4740",
        inactiveBackgroundColor: "#7a5b52",
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarLabel: () => <Text style={globalStyles.tabBarLabel}>Home</Text>, tabBarIcon: () => <AntDesign name="home" size={24} color="white" /> }}
      />
      <Tab.Screen
        name="CreateRecipe"
        component={CreateRecipeStack}
        options={{ tabBarLabel: () => <Text style={globalStyles.tabBarLabel}>CreateRecipe</Text>, tabBarIcon: () => <Ionicons name="create-outline" size={24} color="white" /> }}
      />
      <Tab.Screen
        name="ViewRecipes"
        component={ViewRecipesStack}
        options={{ tabBarLabel: () => <Text style={globalStyles.tabBarLabel}>ViewRecipes</Text>, tabBarIcon: () => <Ionicons name="list-outline" size={24} color="white" /> }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreenStack}
        options={{ tabBarLabel: () => <Text style={globalStyles.tabBarLabel}>Settings</Text>, tabBarIcon: () => <Ionicons name="settings-outline" size={24} color="white" /> }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
