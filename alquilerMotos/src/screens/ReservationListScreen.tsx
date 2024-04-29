import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeReservation } from '../store/actions/reservationActions';
import { RootState } from '../store/store';

const ReservationListScreen = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservations.reservations) as any[];

  const renderItem = ({ item }) => (
    <View>
      <Text>Persona responsable: {item.responsiblePerson}</Text>
      <Text>Motocicleta alquilada: {item.rentedMotorcycle}</Text>
      <Text>Agencia: {item.agency}</Text>
      <Text>Precio: {item.price}</Text>
      <Text>Estado de pago: {item.paymentStatus}</Text>
      <Text>Fecha de inicio del alquiler: {item.rentalStartDate}</Text>
      <Text>Fecha de fin del alquiler: {item.rentalEndDate}</Text>
      <Text>Fecha de reserva: {item.reservationDate}</Text>
      <Button title="Eliminar" onPress={() => handleRemoveReservation(item.id)} />
    </View>
  );

  const handleRemoveReservation = (id: number) => {
    dispatch(removeReservation(id));
  };

  return (
    <FlatList
      data={reservations}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ReservationListScreen;
