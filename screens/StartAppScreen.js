import {
    Button,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";

import Card from "../components/card";
import Input from "../components/input";
import React from "react";
import colors from "../constants/colors";
import { useState } from "react";

const StartAppScreen = ({onStartApp}) => {
    const [nameValue, setNameValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedName, setSelectedName] = useState('')

    
    const handleResetInput = () => {
        setConfirmed(false)
        setNameValue('')
    }
    const handleInput = (text) => {
        setNameValue(text)
    }

    const handleConfirmation = () => {
        setConfirmed(true)
        setSelectedName(nameValue)
        setNameValue('')
        console.log(nameValue)
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Card>
                    <Text>Indica tu Nombre</Text>
                    <Input onChangeText={handleInput} value={nameValue}/>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.clearButton} onPress={handleResetInput}>
                            <Text style={{color: 'white'}}>Borrar</Text>
                        </Pressable>
                        <Pressable style={{...styles.clearButton,...styles.confirmButton}} onPress={handleConfirmation}>
                            <Text style={{color: 'white'}}>Confirmar</Text>
                        </Pressable>
                    </View>
                </Card>
                {confirmed && <Text>{selectedName}</Text>} 
                <Text style={{marginTop: 20,}}>{selectedName} para crear una lista haz click en continuar</Text>
                <Button title="Continuar" onPress={() => onStartApp(selectedName)}/>
            </View>    
                
                
        </TouchableWithoutFeedback>
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