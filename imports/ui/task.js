import { Template } from 'meteor/templating';
import { Player } from '../api/tasks.js';
import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Player.update(this._id, {
      $set: { checked: !this.checked },
    });
  },
  'click .delete'() {
    Player.remove(this._id);
  },
});