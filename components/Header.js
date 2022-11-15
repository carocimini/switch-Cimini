import {StyleSheet, Text, View} from "react-native"

import React from "react"
import colors from "../constants/colors";

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>   
    )     
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:90,
        backgroundColor: colors.primary,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    headerTitle:{
        color:"white",
        fontSize: 30,
        fontWeight: "500",
    }
})