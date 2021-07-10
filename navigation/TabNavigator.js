// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStack } from "./HomeStack";
import { AboutStack } from "./AboutStack";
import { CreateRecipeStack } from "./CreateRecipeStack";
import { ViewRecipeStack } from "./ViewRecipeStack";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: "Home", tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />)}} />
      <Tab.Screen name="CreateRecipe" component={CreateRecipeStack} options={{tabBarLabel: "CreateRecipe", tabBarIcon: () => (<Ionicons name="create-outline" size={24} color="black" />)}} />
      <Tab.Screen name="ViewRecipe" component={ViewRecipeStack} options={{tabBarLabel: "ViewRecipe", tabBarIcon: () => (<Ionicons name="list-outline" size={24} color="black" />)}} />
      <Tab.Screen name="About" component={AboutStack} options={{tabBarLabel: "About", tabBarIcon: () => (<AntDesign name="info" size={24} color="black" />)}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
