// ./screens/Register.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";

const Register = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>RegisterScreen title..!</Text>
        <Text style={globalStyles.contentText}>RegisterScreen container..!</Text>
        <CustomButton text="Back" navigation={navigation}></CustomButton>
    </View>
  );
};

export default Register;