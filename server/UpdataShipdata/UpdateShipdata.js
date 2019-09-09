//To auto update shipdata
//on progress

const fs = Npm.require('fs')

const Info = require('./Info.json');

export function UpdateShipdata(){
    let shipdata = fs.readdirSync('./server/GrabRecords/SingleShip/shipdata.json');
    console.log(shipdata);
}