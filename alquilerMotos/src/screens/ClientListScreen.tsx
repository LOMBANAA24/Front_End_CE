import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

const ClientListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);

  const customers = [
    { 
      id: 1, 
      DNI: '12345678A', 
      name: 'Juan', 
      surname: 'Pérez', 
      address: 'Calle Mayor 1', 
      city: 'Madrid', 
      phone: '123-456-789',
      goodCustomer: true,
      insurance: 'Seguro Básico',
      profilePic: require('../assets/images/JuanPerez.jpeg'),
      rentedBike: { 
        matricula: 'ABC123', 
        marca: 'Ducati', 
        modelo: 'Panigale V4', 
        fechaInicio: '01/04/2024', 
        fechaFin: '15/04/2024',
        rentedFrom: 'Garaje Competición',
        foto: require('../assets/images/panigale_v4.png'),
      },
    },
    { 
      id: 2, 
      DNI: '87654321B', 
      name: 'María', 
      surname: 'González', 
      address: 'Avenida Libertad 20', 
      city: 'Barcelona', 
      phone: '987-654-321',
      goodCustomer: false,
      insurance: 'Seguro Completo',
      profilePic: require('../assets/images/MariaGonzalez.jpeg'),
      rentedBike: {
        matricula: 'XYZ987', 
        marca: 'BMW', 
        modelo: 'S1000RR', 
        fechaInicio: '05/04/2024', 
        fechaFin: '20/04/2024',
        rentedFrom: 'Garaje Motorsport',
        foto: require('../assets/images/s1000rr.jpeg'),
      },
    },
    // Agregar más clientes según sea necesario
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.profilePic} style={styles.profilePic} />
      </View>
      <Text>{`DNI: ${item.DNI}`}</Text>
      <Text>{`Nombre: ${item.name}`}</Text>
      <Text>{`Apellido: ${item.surname}`}</Text>
      <Text>{`Dirección: ${item.address}`}</Text>
      <Text>{`Ciudad: ${item.city}`}</Text>
      <Text>{`Teléfono: ${item.phone}`}</Text>
      <Text>{`Buen cliente: ${item.goodCustomer ? 'Sí' : 'No'}`}</Text>
      <Text>{`Seguro: ${item.insurance}`}</Text>
      <Text>{`Moto Rentada:`}</Text>
      <TouchableOpacity onPress={() => {
        setSelectedBike(item.rentedBike);
        setModalVisible(true);
      }}>
        <Image source={item.rentedBike.foto} style={styles.bikeImage} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Button title="Editar" onPress={() => handleEditCustomer(item)} />
        <Button title="Eliminar" onPress={() => handleDeleteCustomer(item.id)} />
      </View>
    </View>
  );

  const handleEditCustomer = (customer) => {
    console.log("Editar cliente:", customer);
  };

  const handleDeleteCustomer = (customerId) => {
    console.log("Eliminar cliente con ID:", customerId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedBike(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={selectedBike ? selectedBike.foto : null} style={styles.selectedBikeImage} />
            <Text>{`Matrícula: ${selectedBike ? selectedBike.matricula : ''}`}</Text>
            <Text>{`Marca: ${selectedBike ? selectedBike.marca : ''}`}</Text>
            <Text>{`Modelo: ${selectedBike ? selectedBike.modelo : ''}`}</Text>
            <Text>{`Fecha de Inicio de Alquiler: ${selectedBike ? selectedBike.fechaInicio : ''}`}</Text>
            <Text>{`Fecha de Fin de Alquiler: ${selectedBike ? selectedBike.fechaFin : ''}`}</Text>
            <Text>{`Almacén de Alquiler: ${selectedBike ? selectedBike.rentedFrom : ''}`}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => {
                setModalVisible(false);
                setSelectedBike(null);
              }}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    alignItems: 'center', // Centra la imagen horizontalmente
  },
  profilePic: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  selectedBikeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  closeButton: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ClientListScreen;
