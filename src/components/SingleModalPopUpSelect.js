

import React,{useState,useEffect} from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    Button,
    Pressable
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SingleModalPopUpSelect=(props)=>{
    const [showModal,setShowModal] = useState(false);
    const [selectedData,setSelectedData] = useState(null);
    const [receivedData,setReceivedData] = useState([]);

    useEffect(()=>{
        setShowModal(props.visible);
    },[props.visible]);

    useEffect(()=>{},[receivedData]);

    useEffect(()=>{
        if(props.initialSelect){
            setSelectedData({...props.initialSelect});
        }
        if(props.data.length > 0){
            var myData = [];
            props.data.forEach(x=>{
                if(props.initialSelect){
                    if(props.initialSelect.id == x.id){
                        myData.push({name:x.name,id:x.id,isChecked:true,metaData:x.metaData});
                    }
                    else{
                        myData.push({name:x.name,id:x.id,isChecked:false,metaData:x.metaData});
                    }
                }
                else{
                    myData.push({name:x.name,id:x.id,isChecked:false,metaData:x.metaData});
                }
                
            });
            setReceivedData(myData);
        }
    },[props.data]);

    const handleCloseModal = ()=>{
        props.onCloseModal();
    }


  

    const handleSelectItem = (checked,id)=>{
         var myDatas = receivedData;
         var mySelected = null;
         const isSeen = myDatas.find(data=>data.id == id);
         if(isSeen){
              if(props.mustHaveSelected){ // if true the item must have a selected value
                    let index = myDatas.indexOf(isSeen);
                    for(var i=0;i<myDatas.length;++i){
                        myDatas[i].isChecked = false;
                    }
                    myDatas[index].isChecked = true;
                    setReceivedData(myDatas);
                    if(myDatas[index].isChecked){
                        mySelected = {name:myDatas[index].name,id:myDatas[index].id,isChecked:true,metaData:myDatas[index]?.metaData};
                    }
                    else{
                        mySelected = null;
                    }
                    setSelectedData(mySelected);
                    props.onSelected(mySelected);
                    props.onCloseModal();
              }
              else{
                    let index = myDatas.indexOf(isSeen);
                    for(var i=0;i<myDatas.length;++i){
                        myDatas[i].isChecked = false;
                    }
                    myDatas[index].isChecked = !checked;
                    setReceivedData(myDatas);
                    if(myDatas[index].isChecked){
                        mySelected = {name:myDatas[index].name,id:myDatas[index].id,isChecked:true,metaData:myDatas[index]?.metaData};
                    }
                    else{
                        mySelected = null;
                    }
                    setSelectedData(mySelected);
                    props.onSelected(mySelected);
                    props.onCloseModal();
              }

         }
    }

    return (
        <Modal
           animationType='slide'
           transparent={props.transparent}
           visible={showModal}
           onRequestClose={()=>setShowModal(false)}
        >
            <View style={modalStyle.modalOverlay}>
                  <View style={modalStyle.modalContent}>
                        <View style={modalStyle.modalContentTitle} >
                            <View style={{width:'55%'}}>
                               <Text style={modalStyle.modalTitle}>{props.title}</Text>
                            </View>
                            <Pressable style={modalStyle.closeBtn} onPress={handleCloseModal}>
                                <Text style={{color:'white'}}>X</Text>
                            </Pressable>
                        </View>
                        <ScrollView style={modalStyle.scrollViewArea}>
                              {
                                receivedData.length > 0
                                ?receivedData.map((x,i)=>(
                                    <Pressable key={i} style={modalStyle.selectItemPressable}>
                                        <View style={modalStyle.selectItem}>
                                            <CheckBox
                                                onClick={()=>{
                                                    handleSelectItem(x.isChecked,x.id)
                                                }}
                                                isChecked={x.isChecked}
                                            />
                                            <Text style={modalStyle.selectItemText}>{x.name}</Text>
                                        </View>
                                    </Pressable>
                                ))
                                :<></>
                              }
                        </ScrollView>
                  </View>
            </View>
        </Modal>
    );
}

export default SingleModalPopUpSelect;

const modalStyle = StyleSheet.create({
    modalOverlay: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 0
    },
    modalContentTitle:{
        width: '100%',
        borderBottomWidth: 1,
        flexDirection: 'row'
    },
    closeBtn:{
        width:30,
        marginLeft:'35%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems: 'center'
    },
    checkButton:{
        width:40,
        marginLeft:'0%',
    },
    scrollViewArea:{
        width:'100%'
    },
    selectItemPressable:{
        width: '100%',
    },
    selectItem:{
        width: '100%',
        padding: 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#2F2F60'
    },
    selectItemText:{
        fontSize: 16,
        color: '#DE6716',
        marginLeft: 10
    }
});