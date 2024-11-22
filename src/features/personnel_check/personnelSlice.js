
import { createSlice } from "@reduxjs/toolkit";
import DBStore from '../../app/DBStore';
DBStore.initialize();

const PersonnelSlice = createSlice({
    name:'personnel',
    initialState:{personnels:[],personnel:null},
    reducers:{
         setPersonnels: async (state,actions)=>{
             return {
                ...state,
                personnels: actions.payload
             }
         },
         setPersonnel: async (state,actions)=>{
             return {
                ...state,
                personnel: actions.payload
             }
         }
    }
})

export const {
    setPersonnels,
    setPersonnel
} = PersonnelSlice.actions;

export default PersonnelSlice.reducer;
export const selectedPersonnel = (state)=>state.personnel;