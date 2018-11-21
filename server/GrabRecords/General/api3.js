import { GetClanDatabyID } from '../../urls/urls.js';
import { HTTP } from 'meteor/http';

export async function api3(userID, obj){
    return new Promise((resolve,reject) => {
        HTTP.call("get", GetClanDatabyID(obj.ClanID),function (error, result){
            result = JSON.parse(result.content);
            obj.ClanTAG = result.data[obj.ClanID].tag;
            resolve(obj);
        })
    })
}