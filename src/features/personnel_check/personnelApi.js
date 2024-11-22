

import Api from '../../app/api';
import DBStore from '../../app/DBStore';
DBStore.initialize();


const PersonnelApi = {
    getPersonnel: async (credentials)=>{
        try{
            const result = await Api.post('/personnel/authenticate', {armyNumber:credentials});
            return result;
        }
        catch(err){
            console.log(err);
            return null;
        }
    }
}

export default PersonnelApi;