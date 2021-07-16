import React, { useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";

const CustomButton = ({ text, navigation }) => {
  return (
    <TouchableOpacity style={globalStyles.customButtonView} onPress={() => (text === "Back" ? navigation.goBack() : navigation.navigate(text))}>
      <Text style={globalStyles.customButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
