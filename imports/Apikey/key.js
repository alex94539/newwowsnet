import { Meteor } from 'meteor/meteor';



export function ExportApikey(){
    Meteor.call('getenv', "result", function (result) {
        console.log(reuslt);
        return result;
    });
}



/*

export function ExportApikey(){
    if(Meteor.isClient){
        Meteor.call('getApikey', (results) => {
            return results;
        })
    }
    //console.log(env());
    //return process.env.KEY;
}
*/