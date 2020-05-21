import axios from 'axios';

export const getAllNotice = () => async dispatch =>{
    console.log('hee');
    try {
        const res =await axios.get('http://192.168.8.100:3000/jobvacancy');
        console.log(res.data);
    } catch (err) {
        console.log(err.message)
    }
}