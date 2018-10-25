import { Meteor } from 'meteor/meteor';


import '../imports/api/tasks.js';
import '../env.js';


Meteor.startup(() => {
    console.log("server started at " + new Date());
    console.log("first call " + process.env.KEY);
    /*
    Meteor.apply('getenv', {}, (error, result) => {
        console.log("meteorcall " + result);
    });
    */
})

