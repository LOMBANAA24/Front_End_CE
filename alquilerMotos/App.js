// app.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; 
import store from './src/store/store'; // Asegúrate de que la ruta sea correcta
import TabNavigator from './src/navigation/TabNavigator'; 
import GarageScreen from './src/screens/GarageScreen';

const Stack = createStackNavigator();

const App = () => {
  console.log("Store en App:", store); // Añadimos esta consola para verificar el store

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="GarageDetails" component={GarageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
