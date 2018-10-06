import { foreachship } from './foreachship.js';

const shipdata = require('./shipdata.json');
//shipdata = JSON.parse(shipdata);

export function playershipsdata(obj){

    return new Promise(async (resolve, reject) => {
        let promisearr = [];
        for(let index = 0; index < shipdata.length; index++){
            promisearr.push(foreachship(obj, index));
        }

        let datas = await Promise.all(promisearr);  
        datas = datas.filter((value) => {
            if(value) return value;
        });
        resolve(datas);
        
    })
    
}