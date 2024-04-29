import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationListScreen from '../screens/ReservationListScreen';
import ReservationScreen from '../screens/ReservationScreen';

const Stack = createStackNavigator();

const ReservationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ReservationList" component={ReservationListScreen} />
      <Stack.Screen name="Reservation" component={ReservationScreen} />
    </Stack.Navigator>
  );
};

export default ReservationNavigator;
