// ./screens/Home.js

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Welcome..!</Text>
      <Text style={globalStyles.contentText}>Create a recipe..! Then, view it for production..!</Text>
      <Text style={globalStyles.contentText}>You can modify the ingredient quantities based on a single ingredient or the total weight of all ingredients!</Text>
      <Text style={globalStyles.contentText}>Good luck..!</Text>
      
      <CustomButton text="LogIn" navigation={navigation} ></CustomButton>
      <CustomButton text="Register" navigation={navigation} ></CustomButton>
    </View>
  );
};

export default Home;