

import React,{Component,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { 
    View, 
    TextInput,
    ScrollView, 
    Text,
    Image
} from 'react-native';
import AppStyle from '../../statics/style/appStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Api from '../../app/api';
Api._baseUrl = 'http://66.29.155.141:7000';
import DBStore from '../../app/DBStore';
import { setCredentials } from './AuthSlice';
DBStore.initialize();

const Login = (props)=>{
    const [email,setEmail] = useState("omejece@gmail.com");
    const [password,setPassword] = useState("cceeoo33");
    const [loginStatus,setLoginStatus] = useState("");
    const dispatch = useDispatch();
    
    const handleLogin = async ()=>{
          try{
              if(email != "" && password != ""){
                 result = await Api.post('/auth/login',{email:email,password:password});
                 const user = result.user;
                 dispatch(setCredentials({
                    token: result.token,
                    firstName: user.fName,
                    lastName: user.lName,
                    email: user.email
                 }));
                 props.navigation.navigate('dashboard');
              }
              else{
                  alert('enter email and password');
              }
          }
          catch(err){
            if(err)
               setLoginStatus('invalid email of password');
            else
               setLoginStatus('invalid email of password');
          }
    }


    return(
        <View style={AppStyle.loginContainer}>
            <ScrollView>
                <View style={AppStyle.splashImageContainer}>
                    <View style={AppStyle.splashImageInner}>
                        <Image style={AppStyle.splashImage} source={require('../../statics/images/millitary2.png')} />
                    </View>
                </View>
                <View style={{height:5}}></View>
                <View style={{justifyContent:'center',width:'100%',alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <Text style={{color:'#006585',fontSize:20}}>Sign in to</Text>
                    <Text style={{color:'#006585',fontSize:20}}>Personnel Authenticator</Text>
                </View>
                <View style={{height:20}}></View>
                <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
                     <TextInput onChangeText={setEmail} value={email} style={AppStyle.formControl} placeholder='Enter email' />
                </View>
                <View style={{height:20}}></View>
                <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}>
                     <TextInput value={password} onChangeText={setPassword} style={AppStyle.formControl} placeholder='Enter password' secureTextEntry={true} />
                </View>
                <View style={{height:20}}></View>
                <View style={{width:'100%'}}>    
                     <TouchableOpacity style={AppStyle.loginSubmitBtn} onPress={handleLogin}>
                          <Text style={{fontSize: 15,color:'white'}}>Signin</Text>
                     </TouchableOpacity>
                </View>
                <View style={{height:20}}></View>
                <TouchableOpacity style={AppStyle.forgotPassword}>
                     <Text style={{fontSize: 15,color:'red'}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={{height:20}}></View>
                {
                    loginStatus != ""
                    ?<View style={{width:'100%',color:'pink',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15,color:'red'}}>{loginStatus}</Text>
                    </View>
                    :<></>
                }
                
                
            </ScrollView>
        </View>
    )
}

export default Login;