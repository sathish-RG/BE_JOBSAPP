const express=require('express');
const userController = require('../controllers/userController');
const auth =require ('../middlewares/auth')

const userRouter=express.Router();

userRouter.get('/profile', auth.checkAuth,auth.allowRoles(['user','recruiter','admin']), userController.getProfile);
userRouter.put('/profile', auth.checkAuth, auth.allowRoles(['user']), userController.updateProfile);
userRouter.delete('/profile', auth.checkAuth, auth.allowRoles(['user','admin']), userController.deleteProfile);

userRouter.post('/apply/:jobId',auth.checkAuth, auth.allowRoles(['user']), userController.applyJob);
userRouter.get('/applications', auth.checkAuth, auth.allowRoles(['user']), userController.myApplications);

module.exports=userRouter;