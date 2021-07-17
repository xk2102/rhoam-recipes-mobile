// ./screens/Register.js

import React, { useState, useEffect, useContext } from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import { registerUser } from "../utils/apiCalls";
import { Settings } from "../contexts/Settings";
import ErrorText from "../components/ErrorText";

const Register = ({ navigation }) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const { apiUrl, setUserCredentials } = useContext(Settings);
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    registrationError: "",
  });
  useEffect(() => console.log(credentials), [credentials]);
  // // ----------------------------------------------------------------
  // // -- FORM HANDLERS------------------------------------------------
  // // ----------------------------------------------------------------
  function handleCredentials(value, what) {
    if (what === "userName") {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        userName: value,
      }));
    }
    if (what === "email") {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        email: value,
      }));
    }
    if (what === "password") {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        password: value,
      }));
    }
    if (what === "passwordConfirm") {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        passwordConfirm: value,
      }));
    }
  }
  // // ----------------------------------------------------------------
  // // -- API RESPONSES -----------------------------------------------
  // // ----------------------------------------------------------------

  function apiResponse_registerUser() {
    const fetchPromise = registerUser(apiUrl, credentials.userName, credentials.email, credentials.password);
    fetchPromise
      .then((response) => {
        if (response.status === 409) {
          console.log("registerUser.js - apiResponse_registerUser - status 409: mail already exists..!");
          setCredentials((prevCredentials) => ({
            ...prevCredentials,
            registrationError: "ERROR: mail already exists..!",
          }));
        }
        if (response.status === 500) {
          console.log("registerUser.js - apiResponse_registerUser - status 500: internal server error..!");
          setCredentials((prevCredentials) => ({
            ...prevCredentials,
            registrationError: "ERROR: internal server error..!",
          }));
        }
        if (response.status === 201) {
          console.log("registerUser.js - apiResponse_registerUser - status 201: user created..! You will be redirected..!");
          setCredentials((prevCredentials) => ({
            ...prevCredentials,
            registrationError: "Registration SUCCESS..! You will be redirected to home screen..!",
          }));
          setTimeout(function () {
            navigation.goBack();
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(`registerUser.js - apiResponse_registerUser - promise error: ${error}`);
      });
  }
  // // ----------------------------------------------------------------
  // // -- LOGIC FUNCTIONS ---------------------------------------------
  // // ----------------------------------------------------------------
  function onSubmit_registerUser() {
    let isValidated = true;
    if (credentials.password !== credentials.passwordConfirm) {
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        registrationError: "ERROR: passwords do not match..!",
      }));
      isValidated = false;
    }

    if (isValidated) {
      apiResponse_registerUser();
    }
  }
  // // ----------------------------------------------------------------
  // // -- RETURN ------------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.contentText}>Please enter a username an email and a password..</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Username: </Text>
        <TextInput style={styles.fieldInput} value={credentials.userName} onChangeText={(value) => handleCredentials(value, "userName")}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Email: </Text>
        <TextInput style={styles.fieldInput} value={credentials.email} onChangeText={(value) => handleCredentials(value, "email")}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Password: </Text>
        <TextInput style={styles.fieldInput} value={credentials.password} onChangeText={(value) => handleCredentials(value, "password")}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Password (confirmation): </Text>
        <TextInput style={styles.fieldInput} value={credentials.passwordConfirm} onChangeText={(value) => handleCredentials(value, "passwordConfirm")}></TextInput>
      </View>

      {credentials.registrationError === "Registration SUCCESS..! You will be redirected to home screen..!" ? (
        <ErrorText type="green" text={credentials.registrationError}></ErrorText>
      ) : (
        <ErrorText type="red" text={credentials.registrationError}></ErrorText>
      )}

      <TouchableOpacity style={globalStyles.customButtonView} onPress={onSubmit_registerUser}>
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
