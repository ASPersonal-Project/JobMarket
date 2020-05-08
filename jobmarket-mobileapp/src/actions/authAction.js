import axios from 'axios';

export const signUp = ({email,password}) => {
    console.log({email,password});

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password})
    const res = axios.post(body,config);
}