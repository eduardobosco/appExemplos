import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawerNavigator';
import Welcome from '../screens/Welcome/welcome'
import Login from '../screens/Login/Login'
import PizzaScreen from '../screens/PizzaScreen/pizzaScreen';
import TemakiScreen from '../screens/TemakiScreen/temakiScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={DrawerNavigator} />

    </Stack.Navigator>

  );
}

export default Navigator;