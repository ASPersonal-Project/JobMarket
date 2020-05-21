import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {StyleSheet } from 'react-native';
import AuthForm from '../component/AuthForm';
import {signIn} from '../actions/authAction';


const SigninScreen = ({signIn}) => {
    return (
        <View style={styles.container}>
           <AuthForm 
            title="Login" 
            buttonText="Sign In"
            routeName="SignUp"
            text="Not register yet,Register Now"
            onSubmit={signIn}
            />
        </View>
    )
}
export default connect(null,{signIn})(SigninScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderWidth: 3,
        borderColor:"red",
        justifyContent:"center"
    }
})


