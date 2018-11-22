import { ForEachShip } from './ForEachShip.js';

import '../../../env.js';

const ShipData = require('./shipdata.json');

const Limitation = Number(process.env.Interval_Limitation);

export async function PlayerShipsData(obj){

    return new Promise(async (resolve, reject) => {
        let start_index = 0;

        let data = [];
        await RequestByInterval(obj, start_index, data);

        console.log(data);
        resolve(data);
        
    });
    
}


async function RequestByInterval(obj, index, upperlevel){
    return new Promise(async (resolve,reject) => {
        
        let PromiseArray = [];
        let start = index, end = (index + Limitation < ShipData.length) ? index + Limitation : ShipData.length;

        console.log(`Current Index: ` + index);
        console.log(`ShipData Index: ` + ShipData.length);
        console.log(`End Index: ` + end);
        for(let k = start; k < end; k++){
            PromiseArray.push(ForEachShip(obj, k));
        }

        let thisInterval = await Promise.all(PromiseArray);
        ClearNullRecord(thisInterval);
        upperlevel.push(thisInterval);  
        //console.log(`Request by Interval`)
        //console.log(data);

        if(end < ShipData.length){
            setTimeout(async () => {
                await RequestByInterval(obj, index + Limitation, upperlevel);
                resolve();
            },500);
        }
        else{
            resolve();
        }
    });
}

function ClearNullRecord(data){//unfunctional
    //data.flat();
    data = data.filter((value) => {
        if(value) return value;
    });
}

