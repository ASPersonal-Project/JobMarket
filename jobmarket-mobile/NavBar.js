import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/Screen/HomeScreen';
import SigninScreen from './src/Screen/SigninScreen';
import SignupScreen from  './src/Screen/SignupScreen';

  

  const Drawer = createDrawerNavigator();




const NavBar = () => {
        return (
            <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="SignIn" component={SigninScreen} />
                <Drawer.Screen name='SignUp' component={SignupScreen}/>
              </Drawer.Navigator>
            </NavigationContainer>
          );
    
}

export default NavBar;
