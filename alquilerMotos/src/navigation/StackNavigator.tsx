import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MotorcycleScreen from '../screens/MotorcycleScreen';
import GarageScreen from '../screens/GarageScreen';
import ClientScreen from '../screens/ClientScreen';
import ReservationScreen from '../screens/ReservationScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Motorcycle" component={MotorcycleScreen} />
        <Stack.Screen name="Garage" component={GarageScreen} />
        <Stack.Screen name="Client" component={ClientScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
        {/* Agregar más pantallas aquí si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
