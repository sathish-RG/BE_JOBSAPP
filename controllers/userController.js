const User = require("../models/User");

const userController={

 getProfile: async (req,res)=>{
    try{
     //get the userId from the request object
     const userId=req.userId

     //get the user profile from the database
     const userProfile=await User.findById(userId);

     //send the user profile in the response
     res.status(200).json(userProfile);

    }catch(err){
      res.status(500).json({message:err.message});
    }
 },
 updateProfile:async (req,res)=>{
    try{
     //get the userId from request object
     const userId=req.userId;

     //get the details to update from the request body
     const {name,email}=req.body;

     //update the user profile in the database
     const updateProfile=await User.findByIdAndUpdate(userId, { name,email },{ new:true });

     //send the updated user profile in the response
     res.status(200).json({message:'Profile Updated Successfully', updateProfile})


    }catch(err){
      res.status(500).json({message:err.message});
    }
 },
 deleteProfile:async (req,res)=>{
  try{
    //get the userId from request object
    const userId=req.userId;

    //delete the user profile from database
    await User.findByIdAndDelete(userId);

    //logout the user
    res.clearCookie('token');

    //send the response
    res.status(200).json({message:'Profile Deleted Successfully'});

  }catch(err){
    res.status(500).json({message:error.message});
  }
},
 applyJob:async (req, res)=>{
  try{

  }catch(err){
    res.status(500).json({message:error.message});
  }
 },
 myApplications:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:error.message})
  }
 }
}

module.exports=userController;