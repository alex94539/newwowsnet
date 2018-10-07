import { grabuserID } from './GrabUserID/GrabUserID.js';
import { GeneralView } from './General/GrabGeneralRecord.js';
import { PlayerShipsData } from './SingleShip/GrabShiprecords.js';

export function EnterPoint(nick){

    return new Promise(async (resolve,reject) => {
        const userID = await grabuserID(nick);
        if(userID){
            const obj = await GeneralView(userID);
            console.log(obj);
            if(obj){
                const singleshipdata = await PlayerShipsData(obj);
                console.log(singleshipdata);
            }
            else{
                console.log("datas' locked");
            }
        }
        else{
            console.log("no such user");
        }
    });

}