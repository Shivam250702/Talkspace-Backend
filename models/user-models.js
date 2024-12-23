const mongoose = require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema({
phone:{type:string,required:true},
activated:{type:boolean,required:false,default:false},
},{
    timestamp:true
});

module.exports=mongoose.model('User',UserSchema,'users');
