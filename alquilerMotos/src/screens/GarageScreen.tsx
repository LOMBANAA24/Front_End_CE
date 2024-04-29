import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

// Función para generar fechas aleatorias
const generateRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Función para generar nombres aleatorios
const generateRandomName = () => {
  const names = ['Juan', 'María', 'Carlos', 'Laura', 'Andrés', 'Ana', 'Pedro', 'Sofía', 'Diego', 'Valentina'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
  
// Datos de ejemplo para garajes
const garajes = [
  { 
    id: 1, 
    name: 'Garaje Competición', 
    address: 'Calle Carrera 10 #25-35, Bogotá', 
    motos: [1, 2, 3, 4, 5], 
    city: 'Bogotá',
    capacity: 9, 
    availableSpaces: 3,
    manager: 'Carlos Rossi',
    phone: '123-456-789',
    email: 'garaje_comp@example.com',
    motocicletas: [ // Agregar la lista de motocicletas con detalles
      { 
        id: 1, 
        matricula: 'ABC123', 
        numeroBastidor: '1234567890', 
        color: 'Rojo', 
        marca: 'Ducati', 
        modelo: 'Panigale V4',
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require("../assets/images/panigale_v4.png"), // Ruta de la imagen de la motocicleta
        description: 'La Ducati Panigale V4 es una motocicleta de alta gama con un rendimiento excepcional.', // Descripción de la motocicleta
      },
      { 
        id: 2, 
        matricula: 'XYZ987', 
        numeroBastidor: '0987654321', 
        color: 'Negro', 
        marca: 'BMW', 
        modelo: 'S1000RR',
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require('../assets/images/s1000rr.jpeg'), // Ruta de la imagen de la motocicleta
        description: 'La BMW S1000RR es conocida por su excelente relación potencia-peso y su manejo ágil.', // Descripción de la motocicleta
      },
      { 
        id: 3, 
        matricula: 'XYZ789', 
        numeroBastidor: '9876543210', 
        color: 'Rojo con detalles en Azul y Blanco', 
        marca: 'Honda', 
        modelo: 'CBR1000RR', 
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require("../assets/images/cbr1000rr.jpg"), // Ruta de la imagen de la motocicleta
        description: 'La Honda CBR1000RR es una motocicleta supersport con un diseño aerodinámico y una potencia impresionante.', // Descripción de la motocicleta
      },
      { 
        id: 4, 
        matricula: 'GHI321', 
        numeroBastidor: '1234567890', 
        color: 'Negro con detalles en Plata y Blanco', 
        marca: 'Yamaha', 
        modelo: 'YZF-R1', 
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require("../assets/images/r1.jpeg"), // Ruta de la imagen de la motocicleta
        description: 'La Yamaha YZF-R1 2023 es una motocicleta deportiva con un diseño aerodinámico y un rendimiento impresionante.', // Descripción de la motocicleta
      },
      { 
        id: 5, 
        matricula: 'JKL123', 
        numeroBastidor: '0987654321', 
        color: 'Negro con detalles en Rojo y Plata', 
        marca: 'Aprilia', 
        modelo: 'RSV4', 
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require("../assets/images/rsv4.jpg"), // Ruta de la imagen de la motocicleta
        description: 'La Aprilia RSV4 2023 es una motocicleta deportiva con un diseño aerodinámico y un rendimiento impresionante.', // Descripción de la motocicleta
      },
    ],
    agencia: { // Agregar la agencia asociada al garaje
      id: 1,
      nombre: 'Agencia Competición',
      direccion: 'Carrera 10 #25-35, Bogotá',
      telefono: '555-1234',
      email: 'agencia_comp@example.com',
    },
  },
  { 
    id: 2, 
    name: 'Garaje Motorsport', 
    address: 'Carrera 5 #15-20, Medellín', 
    motos: [6, 7, 8],
    city: 'Medellín',
    capacity: 4, 
    availableSpaces: 1, 
    manager: 'Laura Velázquez',
    phone: '111-222-333', 
    email: 'garaje_ms@example.com',
    motocicletas: [ // Agregar la lista de motocicletas con detalles
      { 
        id: 6, 
        matricula: 'MNO456', 
        numeroBastidor: '5678901234', 
        color: 'Azul', 
        marca: 'Honda', 
        modelo: 'CBR1000RR',
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require('../assets/images/cbr1000rr.jpg'), // Ruta de la imagen de la motocicleta
        description: 'La Honda CBR1000RR es una motocicleta supersport con un diseño aerodinámico y una potencia impresionante.', // Descripción de la motocicleta
      },
      { 
        id: 7, 
        matricula: 'DEF456', 
        numeroBastidor: '1122334455', 
        color: 'Rojo', 
        marca: 'Ducati', 
        modelo: 'Panigale V4', 
        fechaInicio: generateRandomDate(new Date(2024, 0, 1), new Date(2024, 4, 17)), // Fecha aleatoria entre enero y mayo del 2024
        fechaSalida: generateRandomDate(new Date(2024, 4, 18), new Date(2024, 5, 30)), // Fecha aleatoria entre mayo y junio del 2024
        reservadoPor: generateRandomName(), // Nombre aleatorio para la reserva
        foto: require("../assets/images/panigale_v4.png"), // Ruta de la imagen de la motocicleta
        description: 'La Ducati Panigale V4 2023 es una motocicleta deportiva con un diseño aerodinámico y un rendimiento impresionante.', // Descripción de la motocicleta
      },
    ],
    agencia: { // Agregar la agencia asociada al garaje
      id: 2,
      nombre: 'Agencia Motorsport',
      direccion: 'Carrera 5 #15-20, Medellín',
      telefono: '555-5678',
      email: 'agencia_ms@example.com',
    },
  },
];

const GarageScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMoto, setSelectedMoto] = useState(null);
  
    const renderItem = ({ item }) => (
        <View style={styles.garageContainer}>
          <Text style={styles.garageName}>Nombre: {item.name}</Text>
          <Text>Dirección: {item.address}</Text>
          <Text>Ciudad: {item.city}</Text>
          <Text>Número de motocicletas: {item.motos.length}</Text>
          <Text>Capacidad total: {item.capacity}</Text>
          <Text>Espacios disponibles: {item.availableSpaces}</Text>
          <Text>Encargado: {item.manager}</Text>
          <Text>Teléfono: {item.phone}</Text>
          <Text>Email: {item.email}</Text>
          <Text>Agencia: {item.agencia.nombre}</Text>
          <Text>Dirección de la agencia: {item.agencia.direccion}</Text>
          <Text>Teléfono de la agencia: {item.agencia.telefono}</Text>
          <Text>Email de la agencia: {item.agencia.email}</Text>
          <Text>Motocicletas:</Text>
          <FlatList
          data={item.motocicletas.slice(0, 4)} // Mostrar solo las primeras 4 motocicletas
          renderItem={({ item: moto }) => (
            <TouchableOpacity onPress={() => {
              setSelectedMoto(moto);
              setModalVisible(true);
            }}>
              <View style={styles.motoContainer}>
                <Image source={moto.foto} style={styles.motoImage} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.motoTitle}>Nombre: {moto.modelo}</Text>
                  <Text>Matrícula: {moto.matricula}</Text>
                  <Text>Número de bastidor: {moto.numeroBastidor}</Text>
                  <Text>Color: {moto.color}</Text>
                  <Text>Marca: {moto.marca}</Text>
                  <Text>Fecha de ingreso al garaje: {moto.fechaInicio ? moto.fechaInicio.toString() : ''}</Text>
                  <Text>Fecha de salida del garaje: {moto.fechaSalida ? moto.fechaSalida.toString() : ''}</Text>
                  <Text>Reservado por: {moto.reservadoPor}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={moto => moto.id.toString()}
        />
      </View>
    );


   
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedMoto(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={selectedMoto ? selectedMoto.foto : null} style={styles.selectedMotoImage} />
            <Text style={styles.motoTitle}>Nombre: {selectedMoto ? selectedMoto.modelo : ''}</Text>
            <Text>Matrícula: {selectedMoto ? selectedMoto.matricula : ''}</Text>
            <Text>Número de bastidor: {selectedMoto ? selectedMoto.numeroBastidor : ''}</Text>
            <Text>Color: {selectedMoto ? selectedMoto.color : ''}</Text>
            <Text>Marca: {selectedMoto ? selectedMoto.marca : ''}</Text>
            <Text>Fecha de ingreso al garaje: {selectedMoto ? selectedMoto.fechaInicio.toString() : ''}</Text>
            <Text>Fecha de salida del garaje: {selectedMoto ? selectedMoto.fechaSalida.toString() : ''}</Text>
            <Text>Reservado por: {selectedMoto ? selectedMoto.reservadoPor : ''}</Text>
            <Text>Descripción: {selectedMoto ? selectedMoto.description : ''}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => {
                setModalVisible(false);
                setSelectedMoto(null);
              }}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={garajes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  garageContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  garageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  motoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    borderRadius: 5,
  },
  motoImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 5,
  },
  motoTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'flex-start',
  },
  selectedMotoImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  closeButton: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default GarageScreen;