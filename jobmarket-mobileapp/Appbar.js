import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import HomeScreen from './src/screen/HomeScreen'
import SigninScreen from './src/screen/SigninScreen';
import SignupScreen from './src/screen/SignupScreen';


const Drawer = createDrawerNavigator();

const Appbar = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="SignIn" component={SigninScreen}/> 
                <Drawer.Screen name="SignUp" component={SignupScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Appbar
