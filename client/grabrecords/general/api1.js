import { getplayerdatabyID } from '../../../imports/env/urls.js';
import { HTTP } from 'meteor/http';

export async function api1(userID, obj){

    return new Promise((resolve,reject) => {
        HTTP.call("get", getplayerdatabyID(userID) ,function (error,result) {
            //resolve(JSON.parse(result.content));
            result = result.content;
            result = JSON.parse(result);
            if(!result.meta.hidden){
                
                deal(result,obj,userID);
            }
            else{
                obj.ishidden = true;
            }
            resolve(obj);

        })
    })
    
}

function deal(result, obj, userID){
    let abbreviation = result.data[userID];

    obj.ishidden = false;
    obj.userID = userID;
    obj.nickname = abbreviation.nickname;
    obj.wins = abbreviation.statistics.pvp.wins;
    obj.losses = abbreviation.statistics.pvp.losses;
    obj.battles = abbreviation.statistics.pvp.battles;
    obj.tie = obj.battles - (obj.wins + obj.losses);
    obj.winrate = ((Number((obj.wins / obj.battles).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.averagedmg = Number((abbreviation.statistics.pvp.damage_dealt / obj.battles).toFixed(2));
    obj.averagefrag = Number((abbreviation.statistics.pvp.frags / obj.battles).toFixed(2));
    obj.survived_wins = abbreviation.statistics.pvp.survived_wins;
    obj.survived_battles = abbreviation.statistics.pvp.survived_battles;
    obj.survived_losses = obj.survived_battles - obj.survived_wins;
    obj.survivedrate_win = ((Number((obj.survived_wins / obj.wins).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.survivedrate_loss = ((Number((obj.survived_losses / obj.losses).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.hitratio_main = ((Number((abbreviation.statistics.pvp.main_battery.hits / abbreviation.statistics.pvp.main_battery.shots).toFixed(4)) *100).toFixed(2)).toString() + "%";
    obj.hitratio_torps = ((Number((abbreviation.statistics.pvp.torpedoes.hits / abbreviation.statistics.pvp.torpedoes.shots).toFixed(4)) * 100 ).toFixed(2)).toString() + "%";
    obj.frags_main = abbreviation.statistics.pvp.main_battery.frags;
    obj.frags_torps = abbreviation.statistics.pvp.torpedoes.frags;
    obj.frags_avia = abbreviation.statistics.pvp.aircraft.frags;
    obj.frags_ram = abbreviation.statistics.pvp.ramming.frags;            
                
}