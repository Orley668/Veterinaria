import React, { Component, useEffect, useState } from 'react'
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button, Pressable, Alert } from 'react-native'

const Formulario = ({ modalVisible, setModalVisible, setPacientes, close }) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintomas, setSintomas] = useState('')

   

    //array function
    const handleCita = () => {
        //Realizar validaciones
        if ([paciente, propietario, email, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono,
            sintomas
        }
       

        setPacientes([...paciente, nuevoPaciente])

        //Se cambia el estado de la modal visible para cerrar y volver al inicio
        setModalVisible(!modalVisible)
        //setModalVisible(false)
        

        //Para limpiar los campos
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintomas('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >

            <SafeAreaView style={styles.contenido}>
                <ScrollView>

                    <Text style={styles.titulo}> Nueva cita {''} </Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre paciente</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono</Text>
                        <TextInput style={styles.input}
                            placeholder='Telefono'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            maxLength={10}
                            value={telefono}
                            onChangeText={setTelefono} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput style={styles.input}
                            placeholder='Sintomas'
                            placeholderTextColor={'#666'}
                            multiline={true}
                            value={sintomas}
                            onChangeText={setSintomas} />
                    </View>



                    <Pressable style={styles.btnCancelar} onPress={close}>
                        <Text style={styles.btnCancelarTexto}>salir</Text>
                    </Pressable>

                    <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
                        <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
                    </Pressable>


                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}


//nombre propietario, email, telefono, sintomas
const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#AB00F0'
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 30
    },
    sintomasInput: {
        height: 1000
    },
    label: {
        color: '#000000',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    campo: {
        marginTop: 10,
        marginBottom: 30
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#000000'
    },
    btnCancelar: {
        backgroundColor: '#FF0000',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnCancelarTexto: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnNuevaCita: {
        backgroundColor: '#00F0CC',
        marginVertical: 30,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase'
    }
});

export default Formulario;




