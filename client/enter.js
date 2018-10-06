import { grabuserID } from '../client/grabrecords/grabuserID/grabuserID.js';
import { generalview } from './grabrecords/general/grabgeneralrecords.js';
import { playershipsdata } from './grabrecords/singleship/grabshiprecords.js';

export function enterpoint(nick){

    return new Promise(async (resolve,reject) => {
        const userID = await grabuserID(nick);
        if(userID){
            const obj = await generalview(userID);
            console.log(obj);
            if(obj){
                const singleshipdata = await playershipsdata(obj);
                console.log(singleshipdata);
            }
            else{
                console.log("datas' locked");
            }
        }
        else{
            console.log("no such user");
        }
    });

}