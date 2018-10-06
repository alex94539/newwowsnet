import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { HTTP } from 'meteor/http';
import { enterpoint } from '../../client/enter.js';
import { finduserIDbynick } from '../env/urls.js';
import { generalview } from '../../client/grabrecords/general/grabgeneralrecords.js';

import './task.js';
import './body.html';


Template.body.helpers({
  tasks() {
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
    await enterpoint(text);
    
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});