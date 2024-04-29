// En un archivo llamado ClientNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClientListScreen from '../screens/ClientListScreen';
// Importa el resto de tus pantallas de cliente aquí

const Stack = createStackNavigator();

const ClientNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ClientList" component={ClientListScreen} />
    {/* Añade aquí el resto de tus pantallas de cliente */}
  </Stack.Navigator>
);

export default ClientNavigator;
