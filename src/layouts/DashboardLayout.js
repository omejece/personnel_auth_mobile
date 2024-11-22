
import React,{Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Personnel from '../features/personnel_check/Personnel';
import About from '../features/about/About';
import Profile from '../features/profile/Profile';

const Drawer = createDrawerNavigator();

const DashboardLayout = (props)=>{

    const handleLogout = (data)=>{
       props.navigation.navigate("login");
    }
     
    return(
        <Drawer.Navigator 
          initialRouteName='personnel'
          screenOptions={{
            headerStyle:{
               backgroundColor: '#43491A',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
               fontSize: 20
            }
         }}
          drawerContent={(props)=> <CustomDrawerContent onLogOut={handleLogout} {...props} /> }
        >
            <Drawer.Screen name='personnel' component={Personnel} />
            <Drawer.Screen name='about' component={About} />
            <Drawer.Screen name='profile' component={Profile} />
        </Drawer.Navigator>
    )
}

export default DashboardLayout;