import { FindUserIDbyNick } from '../../../urls/urls.js';
import { HTTP } from 'meteor/http';

export async function grabuserID(nick, obj){

    return new Promise((resolve, reject) => {
        HTTP.call("get", FindUserIDbyNick(nick), function (error,result){
            result = JSON.parse(result.content);
            if(result.status != "error"){
                resolve(result.data[0].account_id);
            }
            else{
                resolve(null);
            }
        })
    })
    
}