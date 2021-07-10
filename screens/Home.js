// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home screen title..!</Text>
        <Text style={globalStyles.contentText}>Home screen container..!</Text>
        <Button title="Go to LogIn Screen" onPress={() => navigation.navigate('LogIn')}/>
    </View>
  );
};

export default Home;