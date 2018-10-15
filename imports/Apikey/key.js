import { Meteor } from 'meteor/meteor';
import '../../env';

/*
export function ExportApikey(){
    Meteor.call('getenv', function (result) {
        console.log(reuslt);
        return result;
    });
}
*/




export function ExportApikey(){
    console.log(process.env.KEY);
    return process.env.KEY;
}
