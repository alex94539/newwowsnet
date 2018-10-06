import { finduserIDbynick } from '../../../imports/env/urls.js';
import { generalview } from '../general/grabgeneralrecords.js';
import { HTTP } from 'meteor/http';

export async function grabuserID(nick, obj){

    return new Promise((resolve, reject) => {
        HTTP.call("get", finduserIDbynick(nick), function (error,result){
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