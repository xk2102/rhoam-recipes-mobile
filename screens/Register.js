// ./screens/Register.js

import React from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";

const Register = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.contentText}>Please enter a username an email and a password..</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Username: </Text>
        <TextInput style={styles.fieldInput}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Email: </Text>
        <TextInput style={styles.fieldInput}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Password: </Text>
        <TextInput style={styles.fieldInput}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Password (confirmation): </Text>
        <TextInput style={styles.fieldInput}></TextInput>
      </View>
      <TouchableOpacity style={globalStyles.customButtonView}>
        <Text style={globalStyles.customButtonText}>Submit</Text>
      </TouchableOpacity>
      <CustomButton text="Back" navigation={navigation}></CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    // borderColor: "#fff",
    // borderWidth: 2,
    // borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  fieldLabel: {
    // borderColor: "#fff",
    // borderWidth: 2,
    // borderRadius: 10,
    width: "40%",
    padding: 10,
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    color: "#e0d4d1",
  },
  fieldInput: {
    // borderColor: "#fff",
    // borderWidth: 2,
    borderRadius: 10,
    width: "60%",
    padding: 10,
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    backgroundColor: "#fff",
  },
});

export default Register;
