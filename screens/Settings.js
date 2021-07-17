// ./screens/Settings.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const Settings = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Settings screen title..!</Text>
      <Text style={globalStyles.contentText}>Settings screen container..!</Text>
    </View>
  );
};

export default Settings;
