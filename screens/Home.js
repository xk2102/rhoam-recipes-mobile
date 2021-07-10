import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen title..!</Text>
            <Text style={globalStyles.contentText}>Home screen container..!</Text>
        </View>
    )
}

