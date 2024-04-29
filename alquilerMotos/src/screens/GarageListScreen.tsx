// GarageListScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importar Picker desde @react-native-picker/picker

// Datos de ejemplo para garajes
export const garajes = [
  { 
    id: 1, 
    name: 'Garaje Competición', 
    address: 'Calle Carrera 10 #25-35, Bogotá', 
    motos: [1, 2, 3, 4, 5], // Cambio en el número de motos
    city: 'Bogotá',
    capacity: { type: '', spaces: 9 }, // Capacidad del garaje para guardar motos
    espacio: 3, // Espacio del garaje para guardar motos
    manager: 'Carlos Rossi',
    phones: ['123-456-789', '987-654-321'],
    email: 'garaje_comp@example.com'
  },
  { 
    id: 2, 
    name: 'Garaje Motorsport', 
    address: 'Carrera 5 #15-20, Medellín', 
    motos: [6], // Cambio en el número de motos
    city: 'Medellín',
    capacity: { type: '', spaces: 4 }, // Capacidad del garaje para guardar motos
    espacio: 3, // Espacio del garaje para guardar motos
    manager: 'Laura Velázquez',
    phones: ['111-222-333'],
    email: 'garaje_ms@example.com'
  },
  // Agrega más garajes según sea necesario
];

// Motos con ID específico para cada garaje
const motos1 = [
  { id: 1, nombre: 'Ducati Panigale V4', imagen: require("../assets/images/panigale_v4.png"), description: 'La Ducati Panigale V4 es una motocicleta de alta gama con un rendimiento excepcional.', garajeId: 1 },
  { id: 2, nombre: 'BMW S1000RR', imagen: require('../assets/images/s1000rr.jpeg'), description: 'La BMW S1000RR es conocida por su excelente relación potencia-peso y su manejo ágil.', garajeId: 1 },
  { id: 3, nombre: 'Kawasaki Ninja ZX-10R', imagen: require("../assets/images/zx10r.jpeg"), description: 'La Kawasaki Ninja ZX-10R es una motocicleta deportiva de alta tecnología y excelente rendimiento.', garajeId: 1 },
  { id: 4, nombre: 'Aprilia RSV4', imagen: require('../assets/images/rsv4.jpg'), description: 'La Aprilia RSV4 es una motocicleta de competición con un motor potente y un chasis ágil.', garajeId: 1 },
  { id: 5, nombre: 'Yamaha YZF-R1', imagen: require("../assets/images/r1.jpeg"), description: 'La Yamaha YZF-R1 es una motocicleta deportiva con tecnología de última generación y rendimiento superior.', garajeId: 1 },
];

// Motos con ID garaje 2
const motos2 = [
  { id: 6, nombre: 'Honda CBR1000RR', imagen: require('../assets/images/cbr1000rr.jpg'), description: 'La Honda CBR1000RR es una motocicleta supersport con un diseño aerodinámico y una potencia impresionante.', garajeId: 2 },
];

const GarageListScreen = ({ navigation }) => {
  const [selectedMoto, setSelectedMoto] = useState(null);

  const handleViewGarageDetails = (garageId) => {
    // Navegar a la pantalla de detalles del garaje
    navigation.navigate('GarageDetails', { garageId });
  };

  const renderItem = ({ item }) => (
    <View style={styles.garageContainer}>
      <Text style={styles.garageName}>Nombre: {item.name}</Text>
      <Text>Dirección: {item.address}</Text>
      <Text>Ciudad: {item.city}</Text>
      <Text>Número de motocicletas: {item.motos.length}</Text>
      <Text>Capacidad: {item.capacity.spaces}</Text>
      <Text>Espacio disponible: {item.espacio}</Text>
      <View style={styles.motoPickerContainer}>
        <Text style={styles.label}>Seleccionar moto:</Text>
        <Picker
          selectedValue={selectedMoto}
          onValueChange={(itemValue, itemIndex) => setSelectedMoto(itemValue)}
        >
          <Picker.Item label="-- Seleccionar --" value={null} />
          {item.motos.map(motoId => {
            const moto = item.id === 1 ? motos1.find(m => m.id === motoId) : motos2.find(m => m.id === motoId); // Buscar la moto por ID y garajeId
            return <Picker.Item key={moto.id} label={moto.nombre} value={moto} />
          })}
        </Picker>
      </View>
      {/* Detalles de la motocicleta seleccionada */}
      {selectedMoto && (
        <View style={styles.motoDetailsContainer}>
          <Image source={selectedMoto.imagen} style={styles.selectedMotoImage} />
          <Text style={styles.selectedMotoName}>{selectedMoto.nombre}</Text>
          <Text>{selectedMoto.description}</Text>
          {/* Agrega más detalles de la moto aquí */}
        </View>
      )}
      <Button title="Ver Detalles" onPress={() => handleViewGarageDetails(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
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
  motoPickerContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  motoDetailsContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedMotoImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  selectedMotoName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default GarageListScreen;
