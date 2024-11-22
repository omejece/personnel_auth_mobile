

import React from "react";
import { StyleSheet } from "react-native";


const AppStyle = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#006585'
    },
    loginContainer:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        height:'100%',
        backgroundColor: 'white'
    },

    splashContainer:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        height:'100%',
        backgroundColor: '#43491A'
    },
    
    progressBar:{
        width:'100%',
        height:20,
        borderBlockColor: '#010077',
        borderWidth: 1,
        overflowY: 'none',
        overflowX: 'none'
    },

    progressElement:{
        width: '0',
        height: 20,
        backgroundColor: 'white'
    },

    splashTextContainer:{
        justifyContent:'center',
        flexDirection:'column',
        width:'100%',
        alignItems:'center'
    },
    splashImageContainer:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    splashImage:{
       width: 100,
       height: 100,
    },

    splashImageInner:{
        borderColor: '#43491A',
        backgroundColor:'white',
        borderWidth: 1,
        width: 150,
        height: 150,
        padding: 20,
        borderRadius: 100
     },

    formControl:{
        width: '100%',
        height: 40,
        borderColor: '#43491A',
        borderWidth: 2,
        fontSize: 15,
        padding: 10,
        borderRadius: 10,
        color: '#006585'
    },

    loginSubmitBtn:{
        width:'100%',
        height: 40,
        backgroundColor: '#43491A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },


    forgotPassword:{
        width:'100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    dropDownBtn:{
        justifyContent:'center',
        height:40,
        borderColor:'#006585',
        borderWidth: 2,
        width:'100%',
        borderRadius: 10,
        padding: 10
    },



    draweProfileImageContainer:{
        width: '100%',
        height: 150,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column'
    },
    drawerProfileImage:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    sideMenuItem:{
        height: 30,
        paddingLeft: 20,
        flexDirection:'row',
        borderBottomWidth: 1,
        borderBottomColor: '#006683',
        borderTopWidth: 1,
        borderTopColor: '#006683'
    },

    subjectContainer:{
        width: '100%',
        backgroundColor:'transparent',
        padding: 5,
        flexDirection: 'row',
        justifyContent:'center',
        overflowX:'hidden',
        flexWrap: 'wrap'
    },

    subjectBlock:{
        width: '32%',
        height: 100,
        borderColor: '#006683',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        borderRadius: 10,
        backgroundColor: '#C72D05',
        padding: 5,
        opacity: 0.9
    },

    subjectLabelText:{
        fontSize: 17,
        color: 'white'
    },

    topicContainer:{
        width: '100%',
        backgroundColor:'transparent',
        padding: 5,
        flexDirection: 'row',
        justifyContent:'center',
        overflowX:'hidden',
        flexWrap: 'wrap'
    },

    topicBlock:{
        width: '32%',
        height: 100,
        borderColor: '#006683',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        borderRadius: 10,
        backgroundColor: '#C72D05',
        padding: 5,
        opacity: 0.9
    },

    topicLabelText:{
        fontSize: 17,
        fontWeight:'bold',
        color: 'white'
    },

    backImage:{
        width: '100%',
        flex: 1
    },

    levelContainer:{
        padding:20,
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        overflowX:'hidden',
        flexWrap:'wrap'
    },
    
    levelButton:{
        width:'100%',
        height: 40,
        justifyContent:'center',
        padding: 5,
        backgroundColor: '#F38F0C',
        alignItems:'center',
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 10
    }
    
});

export default AppStyle;