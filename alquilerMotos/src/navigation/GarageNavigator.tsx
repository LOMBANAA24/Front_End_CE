import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GarageScreen from '../screens/GarageScreen';

const Stack = createStackNavigator();

const GarageNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Garage" component={GarageScreen} />
    {/* Añade aquí el resto de tus pantallas de garaje */}
  </Stack.Navigator>
);

export default GarageNavigator;
