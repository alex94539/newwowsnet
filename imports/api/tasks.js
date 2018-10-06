import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('players');
export const player = new Mongo.Collection('player');

Meteor.methods({
    'player.insert'(all){
        player.insert(all);
    }
})