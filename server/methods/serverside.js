import { Meteor } from 'meteor/meteor';

import { EnterPoint } from '../GrabRecords/Enter.js';
import { Player } from '../../imports/api/tasks.js';

import '../../env.js';

Meteor.methods({
    personaldata: async function(name){
        const data = await EnterPoint(name);
        Player.insert(data);
        console.log(data);
        return data;
    },
    exportapikey: function(){
        return "你以為我會直接告訴你APIkey嗎wwwwww";
        //return process.env.KEY;
    }
})