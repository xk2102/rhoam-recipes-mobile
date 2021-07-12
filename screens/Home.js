// ./screens/Home.js

import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import CustomButton from "../components/CustomButton";
import { Settings } from "../contexts/Settings";
import { useReducer } from "react/cjs/react.production.min";

const Home = ({ navigation }) => {
  const { apiUrl, userCredentials } = useContext(Settings);
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
