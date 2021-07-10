import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function ViewRecipe() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>ViewRecipe title..!</Text>
            <Text style={globalStyles.contentText}>ViewRecipe container..!</Text>
        </View>
    )
}

