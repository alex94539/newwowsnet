import { getsingleshiprecord } from '../../../imports/env/urls.js';

import { HTTP } from 'meteor/http';

const shipdata = require('./shipdata.json');

export function foreachship(obj, index){
    
    return new Promise((resolve,reject) => {
        HTTP.call("get", getsingleshiprecord(obj.userID, shipdata[index].id), (error, result)=>{
            result = JSON.parse(result.content);
            let data = {};
            data = processdata(result, obj.userID, index);
            resolve(data);
        })
    })
}
//
function processdata(result, ID, index){
    let singleship = {};
    if(result.data[ID]){
        const resuabbre = result.data[ID][0].pvp;
        singleship.shipname = shipdata[index].name[0];
        singleship.pic = shipdata[index].picurl;
        singleship.nation = shipdata[index].nation;
        singleship.type = shipdata[index].type;
        singleship.tier = shipdata[index].tier;
        singleship.wins = resuabbre.wins;
        singleship.losses = resuabbre.losses;
        singleship.battles = resuabbre.battles;
        singleship.tie = resuabbre.battles - (resuabbre.wins + resuabbre.losses);
        singleship.winrate = (Number((resuabbre.wins / resuabbre.battles).toFixed(4)) * 100).toString() + "%";
        singleship.averagedmg = Number((resuabbre.damage_dealt / resuabbre.battles).toFixed(0));
        singleship.averagefrag = Number((resuabbre.frags / resuabbre.battles).toFixed(1));
        singleship.survived_wins = resuabbre.survived_wins;
        singleship.survived_battles = resuabbre.survived_battles;
        singleship.survived_losses = resuabbre.survived_battles - resuabbre.survived_wins;
        singleship.survivedrate_wins = ((Number((resuabbre.survived_wins / resuabbre.survived_battles).toFixed(4)) * 100).toFixed(2)).toString() + "%";
        singleship.survivedrate_losses = ((Number(((resuabbre.survived_battles - resuabbre.survived_wins) / resuabbre.survived_battles).toFixed(4)) *100).toFixed(2)).toString() + "%";
        //singleship
        return singleship;
    }
    else{
        return null;
    }

}