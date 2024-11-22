
import React,{Component,useEffect,useState,useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native'
import SoundPlayer from 'react-native-sound-player';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import AppStyle from '../../statics/style/appStyle';
import PersonnelApi from './personnelApi';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const Personnel = (props)=>{
    const dispatch = useDispatch();
    const [authPrsonnel,setAuthPrsonnel] = useState(null);

    useEffect(()=>{

    },[authPrsonnel]);

    
    const onSuccess = async (e) => {
        try{
            const result = await PersonnelApi.getPersonnel(e.data);
            if(result.success){
                setAuthPrsonnel(result.data);
            }
            else{
                alert(JSON.stringify(result.data));
            }
            
        }
        catch(err){
            
        }
    };


    const resetPage = ()=>{
        setAuthPrsonnel(null);
    }
    
    const renderPage =()=>{
        if(authPrsonnel){
            return(
              <View style={styles.container}>
                    <Image
                        source={{ uri: authPrsonnel?.image }}
                        style={styles.image}
                    />

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>Army No. : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel.armyNumber} </Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>First Name : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel.fName} </Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>Middle Name : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel?.mName} </Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>Last Name : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel?.lName} </Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>Rank : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel?.rank} </Text>
                    </View>

                    <View style={styles.detailItem}>
                        <Text style={{fontWeight:'bold', color:'black'}}>Corp : </Text>
                        <Text style={{color:'black'}}> {authPrsonnel?.core} </Text>
                    </View>
                    <View style={{height:10}}></View>
                    <TouchableOpacity style={AppStyle.loginSubmitBtn} onPress={resetPage}>
                        <Text style={{color:'white'}}>Back To Authentication</Text>
                    </TouchableOpacity>
              </View>
            )
        }
        else{
           return (
                <QRCodeScanner
                    onRead={onSuccess}
                    reactivate={true}
                    reactivateTimeout={500}
                    topContent={
                        <Text style={styles.centerText}>
                            <Text style={styles.textBold}>Scan the QR code on the id card</Text>
                        </Text>
                    }
                />
           )
        }
    }


    return renderPage()
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
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
        flex: 1,
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

export default Personnel;