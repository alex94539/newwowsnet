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
    
    return process.env.KEY;
}
