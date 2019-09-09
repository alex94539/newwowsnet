import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Player } from '../api/tasks.js';
import { Tasks } from '../api/tasks.js'


import './task.js';
import './body.html';


Template.body.helpers({
  SUCK() {
    let ship = Player.find()
    return Tasks.find({},{sort: { CreatedAt: -1}});
  },
});

Template.body.events({
  async 'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    Meteor.call('personaldata', text, function(error,result){
      console.log(result);
    });
    // Insert a task into the collection
    
    
    target.text.value = '';
  },
});