import { ForEachShip } from './ForEachShip.js';

const ShipData = require('./shipdata.json');

export async function PlayerShipsData(obj){

    return new Promise(async (resolve, reject) => {
        let start_index = 0;
        let data = [];
        //const AllData = await ApiRequest(obj, [0,1,2,3,4]);
        
        let Interval = setInterval(async () => {
            if(start_index >= ShipData.length) clearInterval(Interval);

            await new Promise(async (resolve, reject) => {
                data.push(await RequestByInterval(obj, start_index));
                start_index += 15;
                resolve();
            });
        }, 1000);
        Interval;
        console.log('DATA: ');
        console.log(data);
        //InitArray()

        let errorindex = [];
        let datas = [];
        //let AllData = PromiseProcess(PromiseArray, datas, errorindex);
        
        resolve(data);
        
    })
    
}


async function RequestByInterval(obj, index){
    return new Promise(async (resolve,reject) => {
        let PromiseArray = [];
        let start = index, end = (index + 15 < ShipData.length) ? index + 15 : ShipData.length;
        for(let k = start; k < end; k++){
            PromiseArray.push(ForEachShip(obj, k));
        }
        const data = await Promise.all(PromiseArray);
        console.log(`Request by Interval`)
        console.log(data);
        resolve(data);
    })
}

/*
function ErrorProcess(datas, obj){
    return new Promise(async (resolve,reject) => {
        let NewData = [];
        let NewErrorIndex = [];
        NewErrorIndex = datas.filter((value) => {
            if((typeof(value) != Object) && (value != null)) return value;
        });
        NewData = datas.filter((value) => {
            if(typeof(value) == Object) return value;
        });
        if(!NewErrorIndex.length){
            resolve(NewData);
        }
        else{
            const RequestResend = await ApiRequest(obj, NewErrorIndex);
            NewData.concat(RequestResend);
            resolve(NewData);
        }
    });
}

function ApiRequest(obj, indexes){
    return new Promise(async (resolve,reject) => {
        let PromiseArray = [];
        for(let index = 0; index < indexes.length; index++){
            PromiseArray.push(ForEachShip(obj, indexes[index]));
        }
        let tempDatas = await Promise.all(PromiseArray);
        tempDatas = tempDatas.filter((value) => {
            if(value) return value;
        })
        //const temp = await ErrorProcess(tempDatas, obj);
        resolve(tempDatas);
    });
}
*/