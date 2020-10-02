import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigators/navigator'
import DrawerNavigator from './src/navigators/drawerNavigator';
import BottonTabNavigator from './src/navigators/BottonTabNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
      <DrawerNavigator>
        <BottonTabNavigator />
      </DrawerNavigator>
      </Navigator>
      
    </NavigationContainer>
  );
}

export default App;