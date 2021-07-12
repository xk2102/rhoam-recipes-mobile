import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const ErrorText = ({ type, text }) => {
  return (
    <>
      {type === "red" ? (
        <View>
          <Text style={[globalStyles.titleText, styles.red]}>{text}</Text>
        </View>
      ) : (
        <View>
          <Text style={[globalStyles.titleText, styles.green]}>{text}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  red: {
    color: "#ff6666",
  },
  green: {
    color: "#66ffb3",
  },
});
export default ErrorText;
