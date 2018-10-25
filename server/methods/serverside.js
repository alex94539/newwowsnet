import { Meteor } from 'meteor/meteor';

import { EnterPoint } from '../GrabRecords/Enter.js';

import '../../env.js';

Meteor.methods({
    personaldata: async function(name){
        const data = await EnterPoint(name);
        console.log(data);
        return data;
    },
    exportapikey: function(){
        return process.env.KEY;
    }

})