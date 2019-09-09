import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('Tasks');
export const Player = new Mongo.Collection('Player');

