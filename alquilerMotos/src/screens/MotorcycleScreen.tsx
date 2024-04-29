import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMotorcycle, removeMotorcycle } from '../store/actions/motorcycleActions';
import { Motorcycle } from '../types';

const MotorcycleScreen = () => {
  const dispatch = useDispatch();
  const motorcycles: Motorcycle[] = useSelector((state: any) => state.motorcycles); // Especificamos el tipo como Motorcycle[]

  // Función para simular la adición de una motocicleta
  const handleAddMotorcycle = () => {
    // Implementa la lógica de navegación a la pantalla de agregar motocicleta
  };

  // Función para simular la eliminación de una motocicleta
  const handleRemoveMotorcycle = (id: number) => {
    dispatch(removeMotorcycle(id));
  };

  return (
    <View style={styles.container}>
      <Text>Lista de motocicletas:</Text>
      <FlatList
        data={motorcycles}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Matrícula: {item.plate}</Text>
            <Text>Número de bastidor: {item.chassisNumber}</Text>
            <Text>Color: {item.color}</Text>
            <Text>Marca: {item.brand}</Text>
            <Text>Modelo: {item.model}</Text>
            <Text>Garaje actual: {item.garage}</Text>
            <Text>Fecha de llegada al garaje: {item.arrivalDate}</Text>
            <Button title="Eliminar" onPress={() => handleRemoveMotorcycle(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Button title="Añadir Motocicleta" onPress={handleAddMotorcycle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  item: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10
  }
});

export default MotorcycleScreen;
