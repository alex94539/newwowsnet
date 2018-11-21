import { Meteor } from 'meteor/meteor';


import '../imports/api/tasks.js';
import '../env.js';


Meteor.startup(() => {
    console.log("server started at " + new Date());
    console.log("Using Apikey " + process.env.KEY);
    console.log("Current 1 second API request Limitation: " + process.env.Interval_Limitation);
    
})

