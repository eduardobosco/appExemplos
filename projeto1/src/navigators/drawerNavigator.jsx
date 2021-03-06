import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PizzaScreen from '../screens/PizzaScreen/pizzaScreen';
import TemakiScreen from '../screens/TemakiScreen/temakiScreen';
import Welcome from '../screens/Welcome/welcome'
import BottonTabNavigator from './BottonTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="PizzaScreen" component={BottonTabNavigator} />
            <Drawer.Screen name="TemakiScreen" component={BottonTabNavigator} />
            <Drawer.Screen name="CronometroScreen" component={BottonTabNavigator} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;