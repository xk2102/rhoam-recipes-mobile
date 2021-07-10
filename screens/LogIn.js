// ./screens/LogIn.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";

const LogIn = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>LogInScreen title..!</Text>
        <Text style={globalStyles.contentText}>LogInScreen container..!</Text>
        <CustomButton text="Back" navigation={navigation}></CustomButton>
    </View>
  );
};

export default LogIn;