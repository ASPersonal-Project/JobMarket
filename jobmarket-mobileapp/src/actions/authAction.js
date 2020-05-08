import axios from 'axios';

export const signUp = ({email,password}) => {

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const res = axios.post(,body,config);
}