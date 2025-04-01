const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    enum:['admin','user','recruiter'],
    default:"user"
  },
  name:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
})

module.exports=mongoose.model('User', userSchema,'users');