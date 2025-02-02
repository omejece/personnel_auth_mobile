

import React,{Component,useState,useEffect} from 'react';
import { 
    View, 
    TextInput,
    ScrollView, 
    Text,
    Image,
    StyleSheet
} from 'react-native';
import AppStyle from '../../statics/style/appStyle';
import {useRoute} from '@react-navigation/native';

const About = (props)=>{

    const route = useRoute();

    useEffect(()=>{
        //playSound(); 
    },[]);


    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}><Text style={{alignItems:'center',color:'black',fontSize:20}}>About the app</Text></View>
            <View style={{borderWidth:1,borderColor:'black',width:'100%'}}></View>
            <View style={styles.bodyContainer}>
                <Text style={{color:'black',fontSize:15}}>
                    Personnel ID card authentication system is a system designed by Lt AM TahirThis with the view of solving the problem of authentication of military personnel ID cards. 
                    This is aimed at addressing the challenges of imposters claiming to be military personnel to create bad image for the military in face of the civil society.
                </Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    bodyContainer:{
        padding:10,
        width:'100%',
        height: '90%'
    },
    headerContainer:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        display:'flex'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    },
    container: {
        overflowY: 'auto',
        overflowX:'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    image: {
        width: 200, // Adjust to fit your needs
        height: 200, // Adjust to fit your needs
        resizeMode: 'contain', // Optional: Adjusts how the image scales
    },
    resetBtn: {
        with: '10%',
        height: 40,
        borderRadius: 20
    },
    detailItem:{
        width: '100%',
        paddingLeft: 10,
        paddingTop: 5,
        justifyContent:'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    }
  });

export default About;