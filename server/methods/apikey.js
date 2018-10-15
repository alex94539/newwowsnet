import { Meteor } from "meteor/meteor";
import '../../env.js';


Meteor.methods({
    getenv: function() {
        return process.env.KEY;
    }
})