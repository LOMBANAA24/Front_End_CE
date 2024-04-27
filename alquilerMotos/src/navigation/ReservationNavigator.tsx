import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationScreen from '../screens/ReservationScreen';

const Stack = createStackNavigator();

const ReservationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Reservation" component={ReservationScreen} />
    {/* Añade aquí el resto de tus pantallas de reserva */}
  </Stack.Navigator>
);

export default ReservationNavigator;
