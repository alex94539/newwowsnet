import { ForEachShip } from './ForEachShip.js';

const ShipData = require('./shipdata.json');
//shipdata = JSON.parse(shipdata);

export function PlayerShipsData(obj){

    return new Promise(async (resolve, reject) => {
        const AllData = await ApiRequest(obj, [0,1,2,3,4]);
        


        //InitArray()

        let errorindex = [];
        let datas = [];
        //let AllData = PromiseProcess(PromiseArray, datas, errorindex);
        
        resolve(AllData);
        
    })
    
}

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

function InitArray(){
    let arr = [];
    for(let k=0; k<=ShipData.length; k++){
        arr.push(k);
    }
    return arr;
}
//shipdata.length