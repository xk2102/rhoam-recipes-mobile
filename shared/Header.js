import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ info }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>RhoamRecipes🎂 {info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 1.25,
    color: "#ffffff",
    letterSpacing: 0,
  },
});

export default Header;
