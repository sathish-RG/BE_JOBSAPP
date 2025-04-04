const User=require ('../models/User')
const Company=require ('../models/Company')
const bcrypt = require('bcrypt');


const adminController={

createRecruiter:async (req,res)=>{
  try{ 
    const { name, email, password, role } = req.body;
    
   //check if recruiter already exist
   const recruiter=await User.findOne({email});

   if(recruiter){
    return res.status(400).json({message:"Recruiter already exist"})
   }

   //hash password
   const hashedPassword=await bcrypt.hash(password,10)

   //create new recruiter
    const newRecruiter=await User.create({name,email,password:hashedPassword,role})

    //save recruiter to database
    await newRecruiter.save()

    //return success message
    res.status(201).json({message:"Recruiter created successfully",recruiter:newRecruiter})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateRecruiter: async (req, res) => {
  try {
    // Get the details of the recruiter from request body
    const { name, email, password } = req.body;

    // Get the recruiter id from request params
    const { id } = req.params;

    // Check if recruiter already exists
    const recruiter = await User.findById(id);

    // If recruiter not found
    if (!recruiter) {
      return res.status(404).json({ message: "Recruiter not found" });
    }

    // Update recruiter details
    const updatedRecruiter = await User.findByIdAndUpdate(
      id, 
      { name, email, password }, 
      { new: true }
    );

    // Send the updated recruiter data in response
    res.status(200).json({
      message: "Recruiter updated successfully",
      recruiter: updatedRecruiter
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},
deleteRecruiter:async (req,res)=>{
  try{
   //get the recruiter id from request params
   const { id } = req.params;

   //check if recruiter already exist
   const recruiter=await User.findById(id);

   //if recruiter not found
   if(!recruiter){
    return res.status(404).json({message:"Recruiter not found"})
   }

   //delete recruiter 
    await User.findByIdAndDelete(id);
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
createCompany:async (req,res)=>{
  try{
   //get the details of the company from request body
    const { name, location } = req.body;

    //check if company already exist
    const company=await Company.findOne({name});

    //if company already exist
    if(company){
      return res.status(400).json({message:"Company already exist"})
    }

    //create new company
    const newCompany=await Company.create({name,location})

    //save company to database
    await newCompany.save()

    //return success message
    res.status(201).json({message:"Company created successfully",company:newCompany})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
updateCompany:async (req,res)=>{
  try{
   //get the details of the company from request body
    const { name, location } = req.body;

    //get the company id from request params
    const { id } = req.params;

    //check if company already exist
    const company=await Company.findById(id);

    //if company not found
    if(!company){
      return res.status(404).json({message:"Company not found"})
    }

    //update company details
    await Company.findByIdAndUpdate(id, { name, location }, { new: true });

    //return success message
    res.status(200).json({message:"Company updated successfully",company})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
deleteCompany:async (req,res)=>{
  try{
   //get the company id from request params
    const { id } = req.params;

    //check if company already exist
    const company=await Company.findById(id);

    //if company not found
    if(!company){
      return res.status(404).json({message:"Company not found"})
    }

    //delete company 
    await Company.findByIdAndDelete(id);

    //return success message
    res.status(200).json({message:"Company deleted successfully"})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
asignRecruiter:async (req,res)=>{
  try{
   //get the company id from request params
    const {companyId, recruiterId}=req.params;
   
    //check if company already exist
    const company=await Company.findById(companyId);

    //if company not found
    if(!company){
      return res.status(404).json({message:"Company not found"})
    }

    //check if recruiter already exist
    const recruiter=await User.findById(recruiterId);

    //if recruiter not found
    if(!recruiter){
      return res.status(404).json({message:"Recruiter not found"})
    }

    //check if recruiter is already assigned to the company
    const isAssigned=company.recruiter.includes(recruiterId);

    //if recruiter is already assigned to the company
    if(isAssigned){
      return res.status(400).json({message:"Recruiter is already assigned to the company"})
    }
    //assign recruiter to the company
    await Company.findByIdAndUpdate(companyId,{
      recruiter:recruiterId
    });
    //return success message
    res.status(200).json({message:"Recruiter assigned to the company successfully"})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
removeRecruiter:async (req,res)=>{
  try{
   // get the company id from request params
    const {companyId, recruiterId}=req.params;
   
    //check if company already exist
    const company=await Company.findById(companyId);

    //if company not found
    if(!company){
      return res.status(404).json({message:"Company not found"})
    }

    //check if recruiter already exist
    const recruiter=await User.findById(recruiterId);

    //if recruiter not found
    if(!recruiter){
      return res.status(404).json({message:"Recruiter not found"})
    }

    //check if recruiter is already assigned to the company
    const isAssigned=company.recruiter.includes(recruiterId);

    //if recruiter is not assigned to the company
    if(!isAssigned){
      return res.status(400).json({message:"Recruiter is not assigned to the company"})
    }
    
    //remove recruiter from the company
     await Company.findByIdAndUpdate(companyId,{
      
        recruiter:null
      
     });
     //return success message
     res.status(200).json({message:"Recruiter removed from the company successfully"})
  }catch(err){
    res.status(500).json({message:err.message})
  }
},
createJob:async (req,res)=>{
  try{
   //get the details of the job from request body
   
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