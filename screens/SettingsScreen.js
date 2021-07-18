// ./screens/SettingsScreen.js

import React, { useContext } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { Settings } from "../contexts/Settings";
import { logOutUser } from "../utils/userFunctions";

const SettingsScreen = ({ navigation }) => {
  // // ----------------------------------------------------------------
  // // -- STATE -------------------------------------------------------
  // // ----------------------------------------------------------------
  const { userCredentials, setUserCredentials } = useContext(Settings);
  // // ----------------------------------------------------------------
  // // -- FUNCTIONS----------------------------------------------------
  // // ----------------------------------------------------------------
  const onPress_logOutUser = () => {
    setUserCredentials(logOutUser);
  };

  // // ----------------------------------------------------------------
  // // -- RETURN ------------------------------------------------------
  // // ----------------------------------------------------------------
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Account settings: </Text>

      {userCredentials.isLoggedIn && (
        <>
          <Text style={globalStyles.contentText}>
            <Text style={globalStyles.titleText}>Logged in as: </Text>
            {userCredentials.userName}
          </Text>
          <TouchableOpacity style={globalStyles.customButtonView} onPress={onPress_logOutUser}>
            <Text style={globalStyles.customButtonText}>LogOut</Text>
          </TouchableOpacity>
        </>
      )}

      {!userCredentials.isLoggedIn && (
        <TouchableOpacity style={globalStyles.customButtonView} onPress={() => navigation.navigate("LogIn")}>
          <Text style={globalStyles.customButtonText}>LogIn</Text>
        </TouchableOpacity>
      )}

      <Text style={globalStyles.titleText}>App settings: </Text>
    </View>
  );
};

export default SettingsScreen;
