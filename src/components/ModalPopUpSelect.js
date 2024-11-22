

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

const ModalPopUpSelect=(props)=>{
    const [showModal,setShowModal] = useState(false);
    const [isAllSelected,setIsaAllSelected] = useState(false);
    const [selectedData,setSelectedData] = useState([]);
    const [receivedData,setReceivedData] = useState([]);

    useEffect(()=>{
        setShowModal(props.visible);
    },[props.visible]);
    useEffect(()=>{},[receivedData]);

    useEffect(()=>{
        if(props.data.length > 0){
            var myData = [];
            props.data.forEach(x=>{
                myData.push({name:x.name,id:x.id,isChecked:false,metaData:x?.metaData});
            });
            setReceivedData(myData);
        }
    },[props.data]);

    const handleCloseModal = ()=>{
        props.onCloseModal();
    }

    const handleSelectAllItems = (data)=>{
        setIsaAllSelected(!data);
        var myDatas = [];
        setSelectedData([]);
        var mySelected = [];
        if(receivedData.length > 0){
            receivedData.forEach(x=>{
                if(!data){
                    myDatas.push({name:x.name,id:x.id,isChecked:true,metaData:x?.metaData});
                    mySelected.push({name:x.name,id:x.id,isChecked:true,metaData:x?.metaData});
                }
                else{
                    myDatas.push({name:x.name,id:x.id,isChecked:false,metaData:x?.metaData});
                    mySelected = [];
                }
            });
        }
        setReceivedData(myDatas);
        setSelectedData(mySelected);
        props.onSelected(mySelected);
        props.onCloseModal();

    }
    
  

    const handleSelectItem = (checked,id)=>{
         var myDatas = receivedData;
         var mySelected = selectedData;
         setReceivedData([]);
         const isSeen = myDatas.find(data=>data.id == id);
         const seenSelected = mySelected.find(data=>data.id == id);
         if(isSeen){
              let index = myDatas.indexOf(isSeen);
              myDatas[index].isChecked = !checked;
              setReceivedData(myDatas);
              if(!(!checked)){
                  setIsaAllSelected(false);
              }

              if(myDatas[index].isChecked){
                  if(!seenSelected){
                    mySelected.push({name:myDatas[index].name,id:myDatas[index].id,metaData:myDatas[index]?.metaData });
                  }
              }
              else{
                  index = mySelected.indexOf(seenSelected);
                  mySelected.splice(index,1);
              }
              setSelectedData(mySelected);
              props.onSelected(mySelected);
              props.onCloseModal();
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
                            <Pressable style={modalStyle.checkButton}>
                                <CheckBox
                                    onClick={()=>{
                                        handleSelectAllItems(isAllSelected)
                                    }}
                                    isChecked={isAllSelected}
                                    leftText={""}
                                />
                            </Pressable>
                            <Text style={modalStyle.modalTitle}>{props.title}</Text>
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

export default ModalPopUpSelect;

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
        marginLeft:'18%',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems: 'center'
    },
    checkButton:{
        width:40,
        marginLeft:'0%',
    },
    scrollViewArea:{
        width:'100%',
        height: '90%'
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