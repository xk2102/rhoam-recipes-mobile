import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function Register() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Register title..!</Text>
            <Text style={globalStyles.contentText}>Register container..!</Text>
        </View>
    )
}