

import React,{Component, useState,useEffect} from 'react';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import AppStyle from '../statics/style/appStyle';
import DBStore from '../app/DBStore';
DBStore.initialize();

const CustomDrawerContent = ({navigation,onLogOut})=>{
    
    const [details,setDetails] = useState();
    
    useEffect(()=>{
        getDetails();
    },[]);

    const getDetails = async ()=>{
        const myDetail = await DBStore.getAuthData();
        setDetails(myDetail);
    }


    const handleLogout = ()=>{
        onLogOut();
    }

    return(
        <DrawerContentScrollView style={{backgroundColor:'#43491A',opacity:0.9}}>
            {
                details
                ?<View style={AppStyle.draweProfileImageContainer}>
                    <Image style={AppStyle.drawerProfileImage} source={require('../statics/images/male.png')}/>
                    <Text style={{color:'white'}}>{details.firstName+' '+details.lastName}</Text>
                </View>
                :<></>
            }
            <TouchableOpacity style={AppStyle.sideMenuItem} onPress={()=>navigation.navigate('personnel')}>
                <FontAwesome name='user' size={20} color='white' /> 
                <Text style={{fontSize:15,color:'white',marginLeft:20}}>Personnel Auth</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.sideMenuItem} onPress={()=>navigation.navigate('profile')}>
                <FontAwesome name='align-justify' size={20} color='white' /> 
                <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:20}}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.sideMenuItem} onPress={()=>navigation.navigate('about')}>
                <FontAwesome name='cog' size={20} color='white' /> 
                <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:20}}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyle.sideMenuItem} onPress={handleLogout}>
                <FontAwesome name='sign-out' size={20} color='white' /> 
                <Text style={{fontSize:15,fontWeight:'bold',color:'white',marginLeft:20}}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent;