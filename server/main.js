import { Meteor } from 'meteor/meteor';


import '../imports/api/tasks.js';
import '../env.js';


Meteor.startup(() => {
    console.log("server started at " + new Date());
    console.log("Using Apikey " + process.env.KEY);
    
})

