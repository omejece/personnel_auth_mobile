

import React,{Component,useState,useEffect} from 'react';
import { 
    View, 
    TextInput,
    ScrollView, 
    Text,
    Image
} from 'react-native';
import SoundPlayer from 'react-native-sound-player'
import AppStyle from '../../statics/style/appStyle';
import useInterval from '../../hooks/useInterval';
import {useRoute} from '@react-navigation/native';

const screenWords = [
    'A Project on Personnel Authentication',
    'Developed by LT AM TAHIR N/18875',
    'STUDENT OF SOEC 09/24'
]

const Splash = (props)=>{
    const [progressStyle,setProgressStyle] = useState({width:'0%'});
    const [textIndex,setTextIndex] = useState(0);
    const [count,setCount] = useState(0);
    const [isCompleted,setIsCompleted] = useState(false);
    const [myInnterval,setMyInnterval] = useState(2000);

    const route = useRoute();

    useEffect(()=>{},[progressStyle,textIndex]);

    useInterval(()=>{
        if(count < 100){
            var myProgress = count + 10;
            setProgressStyle({width:`${myProgress}%`});
            setCount(myProgress);
            if((myProgress%20) == 0){
                if((textIndex - 1) < screenWords.length){
                    var myIndex = textIndex + 1;
                    setTextIndex(myIndex);
                }
            }
        }
        else{
            if(!isCompleted){
                goToAnotherRoute();
            }
        }
    },myInnterval)

    useEffect(()=>{
        //playSound(); 
    },[]);


    const goToAnotherRoute = ()=>{
         setIsCompleted(true);
         setMyInnterval(null);
         SoundPlayer.stop();
         props.navigation.navigate('login');
    }
    
    return(
        <View style={AppStyle.splashContainer}>
            
            <View style={AppStyle.splashImageContainer}>
                 <View style={AppStyle.splashImageInner}>
                     <Image style={AppStyle.splashImage} source={require('../../statics/images/millitary2.png')} />
                 </View>
            </View>
            <View style={{height:10}}></View>
            <View style={AppStyle.splashTextContainer}>
                  <Text style={{color:'white',fontSize:15}}>
                      {screenWords[textIndex]}
                  </Text>
            </View>
            <View style={{height:10}}></View>
            <View style={AppStyle.progressBar}>
                  <View style={{...AppStyle.progressElement,...progressStyle}}></View>
            </View>
        </View>
    )
}

export default Splash;