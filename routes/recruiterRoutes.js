const express = require('express');
const recruiterController = require('../controllers/recruiterController');
const auth=require('../middlewares/auth');

const recruiterRouter=express.Router();

//manage jobs
recruiterRouter.post('/jobs',auth.checkAuth, auth.allowRoles(['recruiter']), recruiterController.createJob);
recruiterRouter.get('/jobs',auth.checkAuth,auth.allowRoles(['recruiter']), recruiterController.viewJobs);
recruiterRouter.put('/jobs/:id', recruiterController.updateJob);
recruiterRouter.delete('/jobs/:id', recruiterController.deleteJob);
recruiterRouter.get('/jobs/:id/aplicants', recruiterController.viewAplicants);
recruiterRouter.get('/jobs/:jobId/aplicants/:userId', recruiterController.viewCandidateProfile);
recruiterRouter.put('/jobs/:jobId/aplicants/:userId', recruiterController.updateCandidateStatus);

module.exports=recruiterRouter;