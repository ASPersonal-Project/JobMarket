import React from 'react'
import {View} from 'react-native';
import {StyleSheet } from 'react-native';
import AuthForm from '../component/AuthForm';


const SigninScreen = () => {
    return (
        <View style={styles.container}>
           <AuthForm 
            title="Login" 
            buttonText="Sign In"
            routeName="SignUp"
            text="Not register yet,Register Now"
            />
        </View>
    )
}
export default SigninScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 3,
        borderColor:"red",
        justifyContent:"center"
    }
})


