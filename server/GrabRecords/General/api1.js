import { GetPlayerDatabyID } from '../../urls/urls.js';
import { HTTP } from 'meteor/http';

export function api1(userID, obj){

    return new Promise((resolve,reject) => {
        HTTP.call("get", GetPlayerDatabyID(userID) ,function (error,result) {
            //resolve(JSON.parse(result.content));
            result = result.content;
            result = JSON.parse(result);
            if(!result.meta.hidden){
                
                deal(result,obj,userID);
            }
            else{
                obj.Is_Hidden = true;
            }
            resolve(obj);

        })
    })
    
}

function deal(result, obj, userID){
    let abbreviation = result.data[userID];

    obj.CreatedAt = new Date();
    obj.Is_Hidden = false;
    obj.UserID = userID;
    obj.Nickname = abbreviation.nickname;
    obj.Wins = abbreviation.statistics.pvp.wins;
    obj.Losses = abbreviation.statistics.pvp.losses;
    obj.Battles = abbreviation.statistics.pvp.battles;
    obj.Tie = obj.Battles - (obj.Wins + obj.Losses);
    obj.Winrate = obj.Battles == 0 ? 0 : ((Number((obj.Wins / obj.Battles).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.Average_Dmg = obj.Battles == 0 ? 0 : Number((abbreviation.statistics.pvp.damage_dealt / obj.Battles).toFixed(2));
    obj.Average_Frag = obj.Battles == 0 ? 0 : Number((abbreviation.statistics.pvp.frags / obj.Battles).toFixed(2));
    obj.Survived_Wins = abbreviation.statistics.pvp.survived_wins;
    obj.Survived_Battles = abbreviation.statistics.pvp.survived_battles;
    obj.Survived_Losses = obj.Survived_Battles - obj.Survived_Wins;
    obj.Survivedrate_Win = obj.Wins == 0 ? 0 : ((Number((obj.Survived_Wins / obj.Wins).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.Survivedrate_Loss = obj.Losses == 0 ? 0 : ((Number((obj.Survived_Losses / obj.Losses).toFixed(4)) * 100).toFixed(2)).toString() + "%";
    obj.Hitratio_Main = abbreviation.statistics.pvp.main_battery.shots == 0 ? 0 : ((Number((abbreviation.statistics.pvp.main_battery.hits / abbreviation.statistics.pvp.main_battery.shots).toFixed(4)) *100).toFixed(2)).toString() + "%";
    obj.Hitratio_Torps = abbreviation.statistics.pvp.torpedoes.shots == 0 ? 0 : ((Number((abbreviation.statistics.pvp.torpedoes.hits / abbreviation.statistics.pvp.torpedoes.shots).toFixed(4)) * 100 ).toFixed(2)).toString() + "%";
    obj.Frags_Main = abbreviation.statistics.pvp.main_battery.frags;
    obj.Frags_Torps = abbreviation.statistics.pvp.torpedoes.frags;
    obj.Frags_Aviation = abbreviation.statistics.pvp.aircraft.frags;
    obj.Frags_Ram = abbreviation.statistics.pvp.ramming.frags;            
                
}