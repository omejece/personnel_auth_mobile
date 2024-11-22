
import { createSlice } from "@reduxjs/toolkit/react";
import Api from '../../app/api';
import DBStore from '../../app/DBStore';
DBStore.initialize();

const AuthSlice = createSlice({
    name:'auth',
    initialState: {user: null, accessToken: null, isLoggedIn: false},
    reducers:{
        setCredentials: async (state,action)=>{
            await DBStore.saveAuthData(action.payload);
            return{
                ...state,
                user: action.payload,
                accessToken: action.payload.token,
                isLoggedIn: true
            }
        },
        getCredentials: async (state,action)=>{
            const result = await DBStore.getAuthData();
            if(result){
                return{
                    ...state,
                    user: result,
                    accessToken: result.token,
                    isLoggedIn: true
                }
            }
            else{
                return{
                    ...state,
                    isLoggedIn: false
                }
            }
        }
    }
});

export const {setCredentials,getCredentials} = AuthSlice.actions;
export default AuthSlice.reducer;
