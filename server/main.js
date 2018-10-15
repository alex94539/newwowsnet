import { Meteor } from 'meteor/meteor';


import '../imports/api/tasks.js';
import '../env.js';
import './methods/apikey.js'


Meteor.startup(() => {
    console.log("server started at" + new Date());
    console.log(process.env.KEY);
})

