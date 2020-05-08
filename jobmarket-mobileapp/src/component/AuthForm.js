import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input,Card,Button,Text} from 'react-native-elements';
import { Link } from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

const AuthForm = ({title,buttonText,text,routeName}) => {
    const navigation = useNavigation();

    const [state,setState] = useState({email:'',password:''});
    const {email,password} = state;

    // const onChange = (e) => {
    //     setState({
    //         ...state,[e.target.value]
    //     })
    // }
    return (
        <>
        
        <Card title={title}>
            <Input
                label="Email Address"
                placeholder='Email@address.com'
                leftIcon={<Icon name='email' size={24} color='black'/>}
                onChangeText={(email) => setState({email:email})}
                defaultValue={email}
                />
            <Input
                label="Password"
                placeholder='password'
                leftIcon={<Icon name='lock' size={24} color='black'/>}
                onChangeText={(password) => setState({password:password})}
                defaultValue={password}
                />
            <Button
                title={buttonText}
                type="outline"
                />
            <Text style={{margin:20}}>{text} <Text onPress={() => navigation.navigate({routeName})} style={{color:'blue'}}>{routeName}</Text></Text>
{/* 
            <Text>{email}</Text> */}

        </Card>
            

        </>
    )
}

export default AuthForm;