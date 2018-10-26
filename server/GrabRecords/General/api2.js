import { GetPlayerClanbyPlayerID } from '../../urls/urls.js';
import { HTTP } from 'meteor/http';

export async function api2(userID, obj){
    return new Promise((resolve,reject) => {
        HTTP.call("GET", GetPlayerClanbyPlayerID(userID),function (error, result){
            result = JSON.parse(result.content);
            if(result.data[obj.UserID] != null){
                obj.ClanID = result.data[obj.UserID].clan_id;
                obj.HaveClan = true;
            }
            else{
                obj.HaveClan = false;
                obj.ClanID = null;
                obj.ClanTAG = "no Clan";
            }
            resolve(obj);
        });
    })

}