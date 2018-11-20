import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('players');
export const Player = new Mongo.Collection('Player');

