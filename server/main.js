import { Meteor } from 'meteor/meteor';
import { UpdateShipdata } from './UpdataShipdata/UpdateShipdata.js';



import '../imports/api/tasks.js';
import '../env.js';

const fs = Npm.require("fs");
Meteor.startup(() => {
    console.log("server started at " + new Date());
    console.log("Using Apikey " + process.env.KEY);
    console.log("Current 1 second API request Limitation: " + process.env.Interval_Limitation);
    //UpdateShipdata();
    //let data = fs.readfile("./server/grabrecords/singleship/shipdata.json");
    //console.log(data);
})

