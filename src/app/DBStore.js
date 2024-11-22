
import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true);

const DBStore = {
     _db: null,
     initialize: async ()=>{
         DBStore._db = await SQLite.openDatabase({ name: 'mydatabase.db', location: 'default' });
         try{
            DBStore._db.transaction((tx)=>{
                tx.executeSql('CREATE TABLE IF NOT EXISTS Auth (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT, firstName TEXT, lastName TEXT,email TEXT);',[],()=>{
                    //console.log("Created successfully");
                },
                (err)=>{
                    throw err;
                });

            },
            (err)=>{
                console.log(err);
                throw err;
            });
         }
         catch(err){
             console.log(err);
         }
     },

     saveAuthData:(data)=>{
         try{
            DBStore._db.transaction((tx)=>{
                tx.executeSql('SELECT * FROM Auth',[],(tx,results)=>{
                     console.log(results)
                     if(results.rows.length > 0){
                         tx.executeSql('DELETE FROM Auth',[],(tx,results)=>{
                             tx.executeSql('INSERT INTO Auth(token,firstName,lastName,email) VALUES(?,?,?,?)',[data.token,data.firstName,data.lastName,data.email],()=>{
                                return true;
                             },
                             (err)=>{
                                console.log(err)
                                return false;
                             });
                         },
                         (err)=>{
                            console.log(err);
                            return false;
                         });
                     }
                     else{
                        tx.executeSql('INSERT INTO Auth(token,firstName,lastName,email) VALUES(?,?,?,?)',[data.token,data.firstName,data.lastName,data.email],()=>{
                            return true;
                        },
                        (err)=>{
                            return false;
                        });
                     }
                });
             },
             (err)=>{
                 throw err;
             });
         }
         catch(err){
            console.log(err)
            return false;
            
         }
     },

     deleteAuth:()=>{
        return new Promise((resolve,reject)=>{
           DBStore._db.transaction((tx)=>{
               tx.executeSql('DELETE * FROM Auth',[],(tx,results)=>{
                    console.log(results)
                    resolve(results);
               },
               (err)=>{
                   reject(err);
               })
           },
           (err)=>{
               reject(err);
           });
        });
    },

     getAuthData:()=>{
         return new Promise((resolve,reject)=>{
            DBStore._db.transaction((tx)=>{
                tx.executeSql('SELECT * FROM Auth',[],(tx,results)=>{
                     if(results.rows.length > 0){
                          resolve(results.rows.item(0));
                     }
                     else{
                         reject(null);
                     }
                },
                (err)=>{
                    reject(err);
                })
            },
            (err)=>{
                reject(err);
            });
         });
     },

     getToken:()=>{
        return new Promise((resolve,reject)=>{
            DBStore._db.transaction((tx)=>{
               tx.executeSql('SELECT * FROM Auth',[],(tx,results)=>{
                    if(results.rows.length > 0){
                         resolve(results.rows.item(0).token);
                    }
                    else{
                        reject(null);
                    }
               },
               (err)=>{
                   console.log(err)
                   reject(err);
               })
           },
           (err)=>{
               console.log(err)
               reject(err);
           });
        });
    }
}

export default DBStore;