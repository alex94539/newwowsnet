import { Meteor } from 'meteor/meteor';



export function ExportApikey(){
    Meteor.call('getenv', "result", function (result) {
        console.log(reuslt);
        return result;
    });
}



/*

export function ExportApikey(){
    
    //return process.env.KEY;
}
*/