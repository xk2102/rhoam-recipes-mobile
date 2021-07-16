// ./screens/Home.js

import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import { Settings } from "../contexts/Settings";
import { getListOfRecipes } from "../utils/apiCalls";

const Home = ({ navigation }) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const { apiUrl, userCredentials, setListOfRecipes } = useContext(Settings);
  useEffect(apiResponse_getListOfRecipes, []);
  // // ----------------------------------------------------------------
  // // -- API RESPONSES -----------------------------------------------
  // // ----------------------------------------------------------------

  function apiResponse_getListOfRecipes() {
    const fetchPromise = getListOfRecipes(apiUrl);
    fetchPromise
      .then((response) => {
        if (response.status === 500) {
          console.log("App.js - apiResponse_getListOfRecipes - status 500: internal server error..!");
          setError("ERROR: internal server error..!");
        }
        if (response.status === 200) {
          console.log("App.js - apiResponse_getListOfRecipes - status 200: fetch recipes on mount success!");
          return response.json();
        }
      })
      .then((data) => {
        setListOfRecipes(data);
      })
      .catch((error) => {
        console.log(`App.js - apiResponse_getListOfRecipes - promise error: ${error}`);
      });
  }

  return (
    <View style={globalStyles.container}>
      {userCredentials.isLoggedIn && <Text style={[globalStyles.contentText, { textAlign: "right" }]}>{`[Logged in as: ${userCredentials.userName}]`}</Text>}
      <Text style={globalStyles.titleText}>Welcome..!</Text>
      <Text style={globalStyles.contentText}>Create a recipe..! Then, view it for production..!</Text>
      <Text style={globalStyles.contentText}>You can modify the ingredient quantities based on a single ingredient or the total weight of all ingredients!</Text>
      <Text style={globalStyles.contentText}>Good luck..!</Text>

      {!userCredentials.isLoggedIn ? (
        <>
          <CustomButton text="LogIn" navigation={navigation}></CustomButton>
          <CustomButton text="Register" navigation={navigation}></CustomButton>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Home;
