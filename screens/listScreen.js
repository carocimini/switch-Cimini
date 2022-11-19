import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import AddItem from "../components/addItem"
import Lista from "../components/lista"
import ListaCompleta from "../components/completList";
import Modal from "../components/modal"
import React from 'react'
import colors from "../constants/colors";
import { useState } from "react";

const ListScreen = () => {
    const [textItem, setTextItem] = useState('')
    const [list, setList] = useState([])
    const [subList, setSubList] = useState([])

    const [modalVisible, setModalVisible] = useState(false)

    const [itemSelected, setItemSelected] = useState ({})

    const onHandleChange = (t) => {setTextItem(t)}

    const addItem = () => {
        setList((currentState) => [
        ...currentState,
        { id: Math.random().toString(), value: textItem },
        ])
        setTextItem('')
    }

    const completItem = (id, value) => {
        setSubList((currentState) => [
            ...currentState, {id: id, value: value},
        ])
        setList((currentState) =>
        currentState.filter((item) => item.id !== id)
    )
    }

    const selectedItem = (id) => {
        setItemSelected(list.filter((item) => item.id === id)[0])
        setModalVisible(true)
    }

    const deleteItem = () => {
        setList((currentState) =>
        currentState.filter((item) => item.id !== itemSelected.id)
        )
        setItemSelected({})
        setModalVisible(false)
    }

    const hideModal = () => {
        setModalVisible(false)
    }

    const renderItem = ({item}) => (
        <View style={styles.lista}>
        <Text style={styles.subtitulo}>{item.value}</Text>
        <TouchableOpacity style={styles.buttoncheck} onPress={() => completItem(item.id, item.value)}>
            <Text style={{color:"white"}}>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonlista} onPress={() => selectedItem(item.id)}>
            <Text style={{color:"white"}}>X</Text>
        </TouchableOpacity>
        </View>
    )

    const renderOldItem = ({item}) => (
        <View style={styles.sublista}>
            <Text style={styles.subtitulo}>{item.value}</Text>
        </View>
    )

return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.titulo}>Crear Tareas</Text>
            <Text style={styles.subtitulo}>Agrega aqui tus tareas pendientes para hoy</Text>
            <AddItem textItem={textItem} onHandleChange={onHandleChange} addItem={addItem}/>
            <Lista list={list} renderItem={renderItem}/>
            <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionHideModal={hideModal}/>
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.subtitulo}>Estas son las tareas completadas:</Text>
            <ListaCompleta subList={subList} renderOldItem={renderOldItem}/>
        </View>
    </View>
)}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 5,
        marginTop: 0,
    },
    titulo:{
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 20,
        color: colors.primary,
    },
    subtitulo: {
        fontSize: 15,
        width: "80%",
    },
    whitesubtitle: {
        fontSize: 15,
        width: "80%",
        color: "white",
    },
    lista:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width:"95%",
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: 5,
    },
    sublista:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width:"85%",
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 5,
        backgroundColor: colors.light,
        padding: 5,
    },
    buttonlista:{
        backgroundColor: colors.danger,
        height: 25,
        width: 27,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    buttoncheck:{
        backgroundColor: colors.confirm,
        height: 25,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        marginRight: 10,
    },
})