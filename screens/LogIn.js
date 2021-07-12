// ./screens/LogIn.js

import React, { useState, useEffect, useContext } from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import { logInUser } from "../utils/apiCalls";
import { Settings } from "../contexts/Settings";

const LogIn = ({ navigation }) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const { apiUrl, setUserCredentials } = useContext(Settings);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    logInError: "",
  });

  // // ----------------------------------------------------------------
  // // -- FORM HANDLERS------------------------------------------------
  // // ----------------------------------------------------------------
  function handleCredentials(value, what) {
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
  }
  function onSubmit_logInUser() {
    let isValidated = true;
    if (isValidated) {
      apiResponse_logInUser();
    }
  }
  // // ----------------------------------------------------------------
  // // -- API RESPONSES -----------------------------------------------
  // // ----------------------------------------------------------------

  function apiResponse_logInUser() {
    const fetchPromise = logInUser(apiUrl, credentials.email, credentials.password);
    fetchPromise
      .then((response) => {
        if (response.status === 401) {
          console.log("logIn.js - apiResponse_logInUser - status 401: authentication failed..!");
          setCredentials((prevCredentials) => ({
            ...prevCredentials,
            logInError: "ERROR: authentication failed..!",
          }));
        }
        if (response.status === 500) {
          console.log("logInUser.js - apiResponse_logInUser - status 500: internal server error..!");
          setCredentials((prevCredentials) => ({
            ...prevCredentials,
            logInError: "ERROR: internal server error..!",
          }));
        }
        if (response.status === 200) {
          console.log("logInUser.js - apiResponse_logInUser - status 200: user logged in..! You will be redirected..!");
          return response.json();
        }
      })
      .then((data) => {
        setUserCredentials({
          userName: data.userName,
          email: data.email,
          token: data.token,
          isLoggedIn: true,
        });
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          logInError: "Log in SUCCESS..! You will be redirected to home screen..!",
        }));
        setTimeout(function () {
          navigation.goBack();
        }, 3000);
      })
      .catch((error) => {
        console.log(`logInUser.js - apiResponse_logInUser - promise error: ${error}`);
      });
  }

  // // ----------------------------------------------------------------
  // // -- RETURN ------------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>LogInScreen title..!</Text> */}
      <Text style={globalStyles.contentText}>Please enter your email and password..</Text>

      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Email: </Text>
        <TextInput style={styles.fieldInput} placeholder="demo@demo.com" onChangeText={(value) => handleCredentials(value, "email")}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Password: </Text>
        <TextInput style={styles.fieldInput} placeholder="demo" onChangeText={(value) => handleCredentials(value, "password")}></TextInput>
      </View>

      {/* {credentials.logInError === "Log in SUCCESS..! You will be redirected to home screen..!" ? (
        <Text style={(globalStyles.titleText, { color: "#66ffb3" })}>{credentials.logInError}</Text>
      ) : (
        <Text style={(globalStyles.titleText, { color: "#ff6666" })}>{credentials.logInError}</Text>
      )} */}

      <TouchableOpacity style={globalStyles.customButtonView} onPress={onSubmit_logInUser}>
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

export default LogIn;
