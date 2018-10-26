import { GetSingleShipRecord } from '../../urls/urls.js';

import { HTTP } from 'meteor/http';

const ShipData = require('./shipdata.json');

export function ForEachShip(obj, index){
    
    return new Promise((resolve,reject) => {
        HTTP.call("get", GetSingleShipRecord(obj.UserID, ShipData[index].id), (error, result)=>{
            result = JSON.parse(result.content);
            let data = {};
            data = ProcessData(result, obj.UserID, index);
            resolve(data);
        })
    })
}
//
function ProcessData(result, ID, index){
    let singleship = {};
    if(result.data[ID]){
        const resuabbre = result.data[ID][0].pvp;
        singleship.Shipname = ShipData[index].name[0];
        singleship.PicUrl = ShipData[index].picurl;
        singleship.Nation = ShipData[index].nation;
        singleship.Type = ShipData[index].type;
        singleship.Tier = ShipData[index].tier;
        singleship.Wins = resuabbre.wins;
        singleship.Losses = resuabbre.losses;
        singleship.Battles = resuabbre.battles;
        singleship.Tie = resuabbre.battles - (resuabbre.wins + resuabbre.losses);
        singleship.Winrate = ((Number((resuabbre.wins / resuabbre.battles).toFixed(4)) * 100).toFixed(2)).toString() + "%";
        singleship.Average_Dmg = Number((resuabbre.damage_dealt / resuabbre.battles).toFixed(0));
        singleship.Average_Frag = Number((resuabbre.frags / resuabbre.battles).toFixed(1));
        singleship.Survived_Wins = resuabbre.survived_wins;
        singleship.Survived_Battles = resuabbre.survived_battles;
        singleship.Survived_Losses = resuabbre.survived_battles - resuabbre.survived_wins;
        singleship.Survivedrate_Wins = ((Number((resuabbre.survived_wins / resuabbre.survived_battles).toFixed(4)) * 100).toFixed(2)).toString() + "%";
        singleship.Survivedrate_Losses = ((Number(((resuabbre.survived_battles - resuabbre.survived_wins) / resuabbre.survived_battles).toFixed(4)) *100).toFixed(2)).toString() + "%";
        return singleship;
    }
    else if(result.status === 'error'){
        return index;
    }
    else{
        return null;
    }

}