// navigation/HomeNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
// Importa el resto de tus pantallas de inicio aquí

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Añade aquí el resto de tus pantallas de inicio */}
  </Stack.Navigator>
);

export default HomeNavigator;
