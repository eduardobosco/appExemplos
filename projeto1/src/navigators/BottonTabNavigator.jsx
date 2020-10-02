import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TemakiScreen from '../screens/TemakiScreen/temakiScreen'
import Cronometro from '../screens/Cronometro/Cronometro';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PizzaScreen from '../screens/PizzaScreen/pizzaScreen';
import Login from '../screens/Login/Login';
import Welcome from '../screens/Welcome/welcome';

const Tab = createBottomTabNavigator();

const BottonTabNavigator = () => {

  return (
    <Tab.Navigator >

      <Tab.Screen name="PizzaScreen"
        component={PizzaScreen}
        options={{
          tabBarLabel: 'Pizza',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pizza" color={color} size={size} />
          ),
          tabBarBadge: 2,
        }} />

      <Tab.Screen name="TemakiScreen"
        component={TemakiScreen}
        options={{
          tabBarLabel: 'Temaki',
          tabBarIcon: ({ color, size }) => (
            <Icon name="food-croissant" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }} />

      <Tab.Screen name="Cronometro"
        component={Cronometro}
        options={{
          tabBarLabel: 'Cronometro',
          tabBarIcon: ({ color, size }) => (
            <Icon name="timer" color={color} size={size} />
          ),
          tabBarBadge: 2,
        }} />

    </Tab.Navigator>

  );
};
export default BottonTabNavigator;