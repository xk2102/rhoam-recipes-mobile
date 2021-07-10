import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native'
import { globalStyles } from '../styles/global';

export default function Home({navigation}) {

    const onPress_goToLogIn = () => {
        navigation.navigate("LogIn");
        // navigation.push("LogIn");
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen title..!</Text>
            <Text style={globalStyles.contentText}>Home screen container..!</Text>
            <Button title="go to LogIn" onPress={onPress_goToLogIn}/>
        </View>
    )
}

