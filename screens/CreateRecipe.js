// ./screens/CreateRecipe.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const CreateRecipe = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>CreateRecipe screen title..!</Text>
        <Text style={globalStyles.contentText}>CreateRecipe screen container..!</Text>
    </View>
  );
};

export default CreateRecipe;