const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');


const authController={
  //register the user
  register: async (req,res)=>{
    try{
     //get the detailes of the user from request body
     const {name,email,password}=req.body;

     //check if the user already exist
     const user=await User.findOne({email});

     //if the user exists, return a error
     if(user){
      return res.status(400).json({message:'User already exists'});
     }

     //hash the password
     const hashedPassword=await bcrypt.hash(password,10);

     //create a new user object
     const newUser=new User({
      name,
      email,
      password:hashedPassword 
     });

     //save the new user to the database
     await newUser.save();
     
     //return a success message
     res.status(201).json({message:'user created successfully'});

    }catch(err){
      res.status(500).json({message:err.message});
    }
  },

  //Login the user
  login: async (req,res)=>{
    try{
     //get the details of the user from the request body
     const {email,password}=req.body;

     //check if the user exists
     const user=await User.findOne({email});

     //if the user dose not exists, return an error 
     if(!user){
      return res.status(400).json({message:'User dose not exists'})
     }

     //chech if the password is correct 
     const isPasswordCorrect=await bcrypt.compare(password,user.password);

     //if the password is incorrect, return an error
     if(!isPasswordCorrect){
      return res.status(400).json({message:'Invalid password'});
     }

     //create a token
     const token=jwt.sign({id:user._id}, JWT_SECRET)

     //set the token in the cookies
     res.cookie('token',token,{httpOnly:true});

     //return the success message
     res.status(200).json({message:'login successfully'})
    }catch(err){
      res.status(500).json({message:err.message});
    }
  },
  
  //logout the user
  logout:async(req,res)=>{
    try{
      //clear the tocken from the cookie 
      res.clearCookie('token');

      //return a success message
      res.status(200).json({message:'logout successfully'});

    }catch(err){
      res.status(500).json({message:err.message});
    }
  },
  me:async(req,res)=>{
    try{
     //get the user id from the request object
     const {userId}=req;

     //get the user details from the database
     const user= await User.findById(userId).select('-password -__v');

     //return the user details
     res.status(200).json({user});
    }catch(err){
      res.status(500).json({message:err.message});
    }
  } 
}
module.exports=authController;