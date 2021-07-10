import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles/global';

export default function CreateRecipe() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>CreateRecipe title..!</Text>
            <Text style={globalStyles.contentText}>CreateRecipe container..!</Text>
        </View>
    )
}

