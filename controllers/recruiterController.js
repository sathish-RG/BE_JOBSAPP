const Company = require("../models/Company");
const Job = require("../models/Job");

const recruiterController={
  createJob:async (req, res) => {
   try{
    //get the details of the job from request body
    const {title, description} = req.body;

    //get the company details
    const company=await Company.findOne({recruiter:req.userId});
    //create a new job object
    const job = new Job({
      title,
      description,
      postedBy:req.userId,
      company:company._id,
    });
    //save the job to the database
    await job.save();
    //update the company with the new job
    company.jobs.push(job._id);
    await company.save();
    //success message
    res.status(201).json({message:"Job created successfully", job});
   }catch(err){
    res.status(500).json({message:err.message})
   }
  },
  viewJobs:async (req,res)=>{
    try{
     //get the company details
      const company=await Company.findOne({recruiter:req.userId}).populate('jobs');
      //if company not found
      if(!company){
        return res.status(404).json({message:"Company not found"})
      }
      //if company found
      //get the jobs from the company
      const jobs=company.jobs;
      //if no jobs found
      if(jobs.length===0){
        return res.status(404).json({message:"No jobs found"})
      }
      //if jobs found
      //return the jobs
      res.status(200).json({message:"Jobs found", jobs})
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
  viewAplicants:async (req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message})
    }
  },
  viewCandidateProfile:async (req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message})
    }
  },
  updateCandidateStatus:async (req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message})
    }
  },

}
module.exports=recruiterController;