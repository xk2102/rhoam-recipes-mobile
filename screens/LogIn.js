// ./screens/LogIn.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const LogIn = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>LogInScreen title..!</Text>
        <Text style={globalStyles.contentText}>LogInScreen container..!</Text>
        <Button title="Go back to Home screen" onPress={() => navigation.goBack()}/>
    </View>
  );
};

export default LogIn;