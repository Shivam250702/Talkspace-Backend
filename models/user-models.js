const mongoose = require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema({
phone:{type:String,required:true},
activated:{type:Boolean,required:false,default:false},
},{
    timestamp:true
});

module.exports=mongoose.model('User',UserSchema,'users');
