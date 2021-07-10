// ./screens/ViewRecipe.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const ViewRecipe = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>ViewRecipe screen title..!</Text>
        <Text style={globalStyles.contentText}>ViewRecipe screen container..!</Text>
    </View>
  );
};

export default ViewRecipe;