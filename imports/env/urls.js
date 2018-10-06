import { exportapikey } from './key.js'

const key = exportapikey();

export function finduserIDbynick (name){
    const site = "https://api.worldofwarships.asia/wows/account/list/?search=" + name + "&application_id=" + key;
    //console.log(site);
    return site;
}

export function getplayerdatabyID (userID){
    const site = "https://api.worldofwarships.asia/wows/account/info/?application_id=" + key + "&account_id=" + userID;
    return site;
}

export function getclanIDbytag (tag){
    const site = "https://api.worldofwarships.asia/wows/clans/list/?application_id=" + key + "&search=" + tag;
    return site;
}

export function getclandatabyID (clanID){
    const site = "https://api.worldofwarships.asia/wows/clans/info/?application_id=" + key + "&clan_id=" + clanID;
    return site;
}

export function getplayersclanbyplayerID (userID){
    const site = "https://api.worldofwarships.asia/wows/clans/accountinfo/?application_id=" + key + "&account_id=" + userID;
    return site;
}

export function getsingleshiprecord (userID,shipID){
    const site = "https://api.worldofwarships.asia/wows/ships/stats/?application_id=" + key + "&ship_id=" + shipID + "&account_id=" + userID;
    return site;
}