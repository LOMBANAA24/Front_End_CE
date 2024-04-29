// MotorcycleNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MotorcycleListScreen from '../screens/MotorcycleListScreen'; // Importa MotorcycleListScreen

const Stack = createStackNavigator();

const MotorcycleNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="MotorcycleList" component={MotorcycleListScreen} /> {/* Añade MotorcycleListScreen */}
    {/* Aquí puedes agregar más pantallas de motocicletas si es necesario */}
  </Stack.Navigator>
);

export default MotorcycleNavigator;
