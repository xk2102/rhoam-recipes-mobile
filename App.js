import React, {useState} from 'react';
import Home from './screens/Home';
import About from './screens/About';
import {StyleSheet, View, Text} from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { globalStyles } from './styles/global';

const getFonts = () => Font.loadAsync({
  // we can use these anywhere in the app
  "TitilliumWeb-Bold": require("./assets/fonts/TitilliumWeb-Bold.ttf"),
  "TitilliumWeb-Regular": require("./assets/fonts/TitilliumWeb-Regular.ttf")
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>App.js title..!</Text>
            <Text style={globalStyles.contentText}>App.js container..!</Text>
        <Home />
      </View>
    )
  } else {
    return (
      <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
          onError={console.warn}
      />
    )
  }
  
}

