import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import Card from "../components/card";
import Input from "../components/input";
import colors from "../constants/colors";

const StartAppScreen = () => {
    const [value, setValue] = useState('')
    const handleInput = (text) => {
        setValue(text)
    }
    
    return (
        <View style={styles.screen}>
            <Card>
                <Text>Indica tu email</Text>
                <Input value={value} onChangeText={handleInput} blurOnSubmimt autocapitalization='none' autoCorrect={false} keyboadType='email-address'/>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.clearButton}>
                        <Text style={{color: 'white'}}>Borrar</Text>
                    </Pressable>
                    <Pressable style={{...styles.clearButton,...styles.confirmButton}}>
                        <Text style={{color: 'white'}}>Confirmar</Text>
                    </Pressable>
                </View>
            </Card>
        </View>
    )
}

export default StartAppScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    clearButton: {
        backgroundColor: colors.danger,
        height: 35,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    confirmButton: {
        backgroundColor: colors.confirm,
    },
})