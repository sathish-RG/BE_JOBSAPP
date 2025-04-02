const User=require ('../models/User')
const Recruiter=require ('../models/Recruiter')
const Company=require ('../models/Company')
const Jobs=require ('../models/Jobs')


const adminController={

createRecruiter:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateRecruiter:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
deleteRecruiter:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
createCompany:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateCompany:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
deleteCompany:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
asignRecruiter:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
removeRecruiter:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
viewAllJobs:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
createJob:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateJob:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
deleteJob:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
viewAllUsers:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateUser:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},
deleteUser:async (req,res)=>{
  try{

  }catch(err){
    res.status(500).json({message:err.message})
  }
},

}

module.exports=adminController;