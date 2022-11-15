import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import React from "react";
import colors from "../constants/colors";

const AddItem = (props) => {
    const{textItem, onHandleChange, addItem} = props

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.inputcontainer}>
                <TextInput
                placeholder="Tarea Pendiente..."
                placeholderTextColor="grey"
                style={styles.inputStyle}
                value={textItem}
                onChangeText={onHandleChange}
                />
                <TouchableOpacity title="ADD" style={styles.button} onPress={addItem}>
                    <Text>+</Text>
                </TouchableOpacity>
        </View>    
        </TouchableWithoutFeedback>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputcontainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
    },
    inputStyle:{
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 35,
        paddingLeft: 5,
    },
    button:{
        backgroundColor: colors.terciary,
        height: 35,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
    },
})