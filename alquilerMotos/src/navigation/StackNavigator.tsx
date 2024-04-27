import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReservationsScreen from '../screens/ReservationsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reservations" component={ReservationsScreen} />
        {/* Agrega más pantallas aquí */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
