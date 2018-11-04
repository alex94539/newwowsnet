import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';


import './task.js';
import './body.html';


Template.body.helpers({
  SUCK() {
    return Tasks.find({},{sort: { createdAt: -1}});
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
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});