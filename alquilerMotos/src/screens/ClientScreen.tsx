import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ClientScreen = ({ navigation }) => {
  const clients = [
    { id: 1, DNI: '12345678A', name: 'Juan', surname: 'Pérez', address: 'Calle Mayor 1', city: 'Madrid', phone: '123-456-789', profilePic: require('../assets/images/JuanPerez.jpeg') },
    { id: 2, DNI: '87654321B', name: 'María', surname: 'González', address: 'Avenida Libertad 20', city: 'Barcelona', phone: '987-654-321', profilePic: require('../assets/images/MariaGonzalez.jpeg') },
    // Agregar más clientes según sea necesario
  ]; // Aquí debes obtener los clientes desde tu estado global o API

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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ClientDetails', { client: item })}>
          <Text style={styles.buttonText}>Ver Detalles</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ReservationList', { clientId: item.id })}>
          <Text style={styles.buttonText}>Ver Reservas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={clients}
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
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    alignItems: 'center', // Centra la imagen horizontalmente
    marginBottom: 10,
  },
  profilePic: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 50, // Para hacer la imagen redonda
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonText: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ClientScreen;
