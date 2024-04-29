import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import MotorcycleNavigator from './MotorcycleNavigator';
import GarageNavigator from './GarageNavigator';
import ClientNavigator from './ClientNavigator';
import ReservationNavigator from './ReservationNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Inicio" component={HomeNavigator} />
    <Tab.Screen name="Motocicletas" component={MotorcycleNavigator} />
    <Tab.Screen name="Garajes" component={GarageNavigator} />
    <Tab.Screen name="Clientes" component={ClientNavigator} />
    <Tab.Screen name="Reservas" component={ReservationNavigator} />
  </Tab.Navigator>
);

export default TabNavigator;
