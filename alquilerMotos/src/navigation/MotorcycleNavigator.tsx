import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MotorcycleScreen from '../screens/MotorcycleScreen';

const Stack = createStackNavigator();

const MotorcycleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Motorcycle" component={MotorcycleScreen} />
    {/* Añade aquí el resto de tus pantallas de motocicleta */}
  </Stack.Navigator>
);

export default MotorcycleNavigator;
