import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';

export default function LogIn({navigation}) {

    const onPress_backToHome = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>LogIn title..!</Text>
            <Text style={globalStyles.contentText}>LogIn container..!</Text>
            <Button title="back to Home" onPress={onPress_backToHome}/>
        </View>
    )
}