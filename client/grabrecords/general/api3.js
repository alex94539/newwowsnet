import { getclandatabyID } from '../../../imports/env/urls.js';
import { HTTP } from 'meteor/http';

export async function api3(userID,obj){
    return new Promise((resolve,reject) => {
        HTTP.call("get", getclandatabyID(obj.clanID),function (error, final){
            final = JSON.parse(final.content);
            obj.clanTAG = final.data[obj.clanID].tag;
            resolve(obj);
        })
    })
}