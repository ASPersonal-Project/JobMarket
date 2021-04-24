import axios from 'axios';

export const signUp = ({email,password,navigation}) => async dispatch => {

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('http://192.168.8.100:3000/auth/signup',body,config);
        navigation.navigate('SignIn');
        console.log(res.data);
    } catch (error) {
        console.log(error.message);
    }
}

export const signIn = ({email,password,navigation}) => async dispatch => {

    config = {
        headers:{
            'Content-Type':'application/json'
        }    
    }
    const body = JSON.stringify({email,password});
    try {
        const res = await axios.post('http://192.168.8.100:3000/auth/signIn',body,config);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}