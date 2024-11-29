
import axios from "axios";
import DBStore from "./DBStore";
import { Alert } from "react-native";
DBStore.initialize();

const Api = {
     _baseUrl: "https://meteradmin.buywater.store",
     get:async (url,data)=>{
        var token = "";//await DBStore.getToken();
        return new Promise((resolve,reject)=>{
            axios.get(
                Api._baseUrl+url,
                {headers: {'Authorization': `Bearer ${token}`}}
            ).then(result=>{
                resolve(result.data);
            }).catch(err=>{
                reject(err);
            });
        });
     },

     post: async(url,data)=>{
        var token = "";//await DBStore.getToken();
        return new Promise((resolve,reject)=>{
            axios.post(
                Api._baseUrl+url,
                data,
                {headers: {'Authorization': `Bearer ${token ? token : ''}`}}
            ).then(result=>{
                resolve(result.data);
            }).catch(err=>{
                alert(err)
                console.log(err);
                reject(err);
            });
        });
     },


     delete: async(url,data)=>{
        var token = "";//await DBStore.getToken();
        return new Promise((resolve,reject)=>{
            axios.delete(
                Api._baseUrl+url,
                {headers: {'Authorization': `Bearer ${token}`}}
            ).then(result=>{
                resolve(result.data);
            }).catch(err=>{
                reject(err);
            });
        });
     },

     put: async(url,data)=>{
        var token = "";//await DBStore.getToken();
        return new Promise((resolve,reject)=>{
            axios.put(
                Api._baseUrl+url,
                {...data},
                {headers: {'Authorization': `Bearer ${token}`}}
            ).then(result=>{
                resolve(result.data);
            }).catch(err=>{
                reject(err);
            });
        });
     },

     patch: async(url,data)=>{
        var token = "";//await DBStore.getToken();
        return new Promise((resolve,reject)=>{
            axios.patch(
                Api._baseUrl+url,
                {...data},
                {headers: {'Authorization': `Bearer ${token}`}}
            ).then(result=>{
                resolve(result.data);
            }).catch(err=>{
                reject(err);
            });
        });
     }   
}

export default Api;