import axios from 'axios';

export const signUp = async ({email,password}) => {
    console.log({email,password});
try {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password});
    console.log(body);
    const res = await axios.get('http://c7df8364.ngrok.io/jobvacancy/');
    console.log(res.data);
} catch (error) {
    console.log(error);
}
   
}