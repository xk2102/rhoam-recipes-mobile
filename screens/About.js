// ./screens/About.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>About screen title..!</Text>
        <Text style={globalStyles.contentText}>About screen container..!</Text>
    </View>
  );
};

export default About;
