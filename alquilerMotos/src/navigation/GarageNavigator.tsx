import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GarageListScreen from '../screens/GarageListScreen'; // Importamos la nueva pantalla

const Stack = createStackNavigator();

const GarageNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Garajes"
      component={GarageListScreen}
      initialParams={{ garageId: null }} // Parámetros iniciales, se pueden cambiar según lo necesario
    />
    {/* Agrega aquí el resto de tus pantallas de garaje si es necesario */}
  </Stack.Navigator>
);

export default GarageNavigator;
