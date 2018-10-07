import { ForEachShip } from './ForEachShip.js';

const shipdata = require('./shipdata.json');
//shipdata = JSON.parse(shipdata);

export function PlayerShipsData(obj){

    return new Promise(async (resolve, reject) => {
        let PromiseArray = [];
        for(let index = 0; index < shipdata.length; index++){
            PromiseArray.push(ForEachShip(obj, index));
        }

        let datas = await Promise.all(PromiseArray);  
        datas = datas.filter((value) => {
            if(value) return value;
        });
        resolve(datas);
        
    })
    
}