import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeMotorcycle } from '../store/actions/motorcycleActions';

const MotorcycleListScreen = () => {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state: { motorcycles: any[] }) => state.motorcycles);

  const renderItem = ({ item }) => (
    <View>
      <Text>Matrícula: {item.plate}</Text>
      <Text>Marca: {item.brand}</Text>
      <Text>Modelo: {item.model}</Text>
      <Button title="Eliminar" onPress={() => handleRemoveMotorcycle(item.id)} />
    </View>
  );

  const handleRemoveMotorcycle = (id: number) => {
    dispatch(removeMotorcycle(id));
  };

  return (
    <FlatList
      data={motorcycles}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default MotorcycleListScreen;
