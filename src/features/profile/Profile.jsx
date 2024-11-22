

import React,{Component,useState,useEffect} from 'react';
import { 
    View, 
    TextInput,
    ScrollView, 
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import AppStyle from '../../statics/style/appStyle';
import DBStore from '../../app/DBStore';
DBStore.initialize();

const Profile = (props)=>{

    const route = useRoute();

    const [details,setDetails] = useState();
    
    useEffect(()=>{
        getDetails();
    },[]);

    useEffect(()=>{},[details]);

    const getDetails = async ()=>{
        const myDetail = await DBStore.getAuthData();
        setDetails(myDetail);
    }


    return(
        <View style={styles.container}>
            <Image
                source={require('../../statics/images/male.png')}
                style={styles.image}
            />

            <View style={styles.detailItem}>
                <Text style={{fontWeight:'bold', color:'black'}}>First Name : </Text>
                <Text style={{color:'black'}}> {details?.firstName} </Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={{fontWeight:'bold', color:'black'}}>Last Name : </Text>
                <Text style={{color:'black'}}> {details?.lastName} </Text>
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

export default Profile;