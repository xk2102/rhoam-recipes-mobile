// app.js

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/HomeStack";
import { AboutStack } from "./navigation/AboutStack";
import DrawerNavigator from "./navigation/DrawerNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import SettingsProvider from "./contexts/Settings";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    // we can use these anywhere in the app
    "TitilliumWeb-Bold": require("./assets/fonts/TitilliumWeb-Bold.ttf"),
    "TitilliumWeb-Regular": require("./assets/fonts/TitilliumWeb-Regular.ttf"),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SettingsProvider>
        <NavigationContainer>
          {/* <DrawerNavigator /> */}
          <BottomTabNavigator />
        </NavigationContainer>
      </SettingsProvider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;
  }
};

export default App;
