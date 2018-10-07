import { api1 } from './api1.js';
import { api2 } from './api2.js';
import { api3 } from './api3.js';

export function GeneralView(userID){
    return new Promise(async (resolve,reject) => {
        let obj = {};
        obj = await api1(userID, obj);

        if(!obj.Is_Hidden){
            obj = await api2(userID, obj);

            if(obj.HaveClan){
                obj = await api3(userID, obj);
            }
        }
        else{
            resolve(null);
        }
        resolve(obj);
    })
    
}