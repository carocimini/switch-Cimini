import { StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";
import colors from "../constants/colors";

const Input = ({style, restProps}) => {
    return (
        <TextInput {...restProps} style={{ ...styles.input, ...style}}/>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        width: 170,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        marginVertical: 10,
    }
})