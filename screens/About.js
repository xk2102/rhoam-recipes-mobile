import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About title..!</Text>
            <Text style={globalStyles.contentText}>About container..!</Text>
        </View>
    )
}

