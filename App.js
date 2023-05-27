import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import Paciente from './src/componente/Paciente';
import Formulario from './src/componente/Formulario';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([])

  

  const Modificar = (pacienteActualizado) => {
    const pacientesActualizados = pacientes.map((p) => {
      if (p.id === pacienteActualizado.id) {
        return pacienteActualizado;
      }
      return p;
    });
    setPacientes(pacientesActualizados);
    
    setModalVisible(false);
  };
  

  const Eliminar = (pacienteId) => {
    const nuevosPacientes = pacientes.filter((p) => p.id !== pacienteId);
    setPacientes(nuevosPacientes);
  };

  const cerrar = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={styles.titulo}>
        Administrador de citas {''}
        <Text style={styles.subtitulo}> Veterinaria</Text>
      </Text>

      <Pressable 
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}>

        <Text style={styles.btnTextoNuevaCita}>
          Nueva Cita
        </Text>
      </Pressable>

      {pacientes.length === 0 ?

        <Text style={styles.NClientes}>No hay clientes</Text> :
        <FlatList
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item} 
                Modificar={Modificar}
                Eliminar={Eliminar}/>
            )
          }}
           />
      }

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
       
        close={cerrar}
      />
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: '#280E09'
  },
  NClientes: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: '900',
    color: '#280E09'
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#1483D5'
  },
 
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#6D28D9',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  btnNuevaCita: {
    backgroundColor: '#00ff00',
    marginVertical: 30,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10
  }
  


});

export default App;