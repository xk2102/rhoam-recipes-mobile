import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderNested = ({info}) => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{info}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {},
    headerText: {
        fontFamily: "TitilliumWeb-Bold",
        fontSize: 20,
        color: "#ffffff",
        letterSpacing: 0
    }
})

export default HeaderNested;