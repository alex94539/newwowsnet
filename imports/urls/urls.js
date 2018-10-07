import { ExportApikey } from '../Apikey/key.js'

const key = ExportApikey();

export function FindUserIDbyNick(name){
    const site = "https://api.worldofwarships.asia/wows/account/list/?search=" + name + "&application_id=" + key;
    //console.log(site);
    return site;
}

export function GetPlayerDatabyID(userID){
    const site = "https://api.worldofwarships.asia/wows/account/info/?application_id=" + key + "&account_id=" + userID;
    return site;
}

export function GetClanIDbyTag(tag){
    const site = "https://api.worldofwarships.asia/wows/clans/list/?application_id=" + key + "&search=" + tag;
    return site;
}

export function GetClanDatabyID(clanID){
    const site = "https://api.worldofwarships.asia/wows/clans/info/?application_id=" + key + "&clan_id=" + clanID;
    return site;
}

export function GetPlayerClanbyPlayerID(userID){
    const site = "https://api.worldofwarships.asia/wows/clans/accountinfo/?application_id=" + key + "&account_id=" + userID;
    return site;
}

export function GetSingleShipRecord(userID, shipID){
    const site = "https://api.worldofwarships.asia/wows/ships/stats/?application_id=" + key + "&ship_id=" + shipID + "&account_id=" + userID;
    return site;
}
