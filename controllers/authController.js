const authController={
  register: async (req,res)=>{
    try{
      res.json({message:'register route'})
    }catch(err){
      res.status(500).json({message:err.message});
    }
  },
  login: async (req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message});
    }
  },
  logout:async(req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message});
    }
  },
  me:async(req,res)=>{
    try{

    }catch(err){
      res.status(500).json({message:err.message});
    }
  } 
}
module.exports=authController;