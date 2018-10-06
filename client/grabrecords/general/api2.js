import { getplayersclanbyplayerID } from '../../../imports/env/urls.js';
import { HTTP } from 'meteor/http';

export async function api2(userID, obj){
    return new Promise((resolve,reject) => {
        HTTP.call("GET", getplayersclanbyplayerID(userID),function (error, result){
            result = JSON.parse(result.content);
            if(result.data[obj.userID] != null){
                obj.clanID = result.data[obj.userID].clan_id;
                obj.haveClan = true;
                //api3(obj);
            }
            else{
                obj.haveClan = false;
                obj.clanID = null;
                obj.clanTAG = "no Clan";
                //playershipsdata(obj);
            }
            //console.log(`api2`);
            resolve(obj);
        });
    })

}