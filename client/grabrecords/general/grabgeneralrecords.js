import { api1 } from './api1.js';
import { api2 } from './api2.js';
import { api3 } from './api3.js';
import { playershipsdata } from '../singleship/grabshiprecords.js';

export function generalview(userID){
    return new Promise(async (resolve,reject) => {
        let obj = {};
        obj = await api1(userID, obj);

        if(!obj.ishidden){
            obj = await api2(userID, obj);

            if(obj.haveClan){
                obj = await api3(userID, obj);
            }
        }
        else{
            resolve(null);
        }
        resolve(obj);
    })
    
}