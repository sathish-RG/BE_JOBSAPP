const express=require ('express');
const adminController = require('../controllers/adminController');
const auth=require('../middlewares/auth')


const adminRouter=express.Router();
//manage recruiters
adminRouter.post('/recruiter',auth.checkAuth,auth.allowRoles(['admin']),adminController.createRecruiter);
adminRouter.put('/recruiter/:id', auth.checkAuth,auth.allowRoles(['admin']),adminController.updateRecruiter);
adminRouter.delete('/recruiter/:id', auth.checkAuth,auth.allowRoles(['admin']),adminController.deleteRecruiter);

//manage companys
adminRouter.post('/companies', auth.checkAuth,auth.allowRoles(['admin']),adminController.createCompany);
adminRouter.put('/companies/:id', auth.checkAuth,auth.allowRoles(['admin']),adminController.updateCompany);
adminRouter.delete('/companies/:id', auth.checkAuth,auth.allowRoles(['admin']),adminController.deleteCompany);

//assign and remove recruiters
adminRouter.put('/companies/:companyId/assign-recruiter/:recruiterId',auth.checkAuth,auth.allowRoles(['admin']),adminController.asignRecruiter);
adminRouter.put('/companies/:companyId/remove-recruiter/:recruiterId',auth.checkAuth,auth.allowRoles(['admin']),adminController.removeRecruiter);

//manage jobs
// adminRouter.post('/jobs',auth.checkAuth,auth.allowRoles(['admin','recruiter']),adminController.createJob);
// adminRouter.put('/jobs/:id',auth.checkAuth,auth.allowRoles(['admin']),adminController.updateJob);
// adminRouter.delete('/jobs/:id',auth.checkAuth,auth.allowRoles(['admin']),adminController.deleteJob);
// adminRouter.get('/jobs',auth.checkAuth,auth.allowRoles(['admin']),adminController.viewAllJobs);

// //manage users
// adminRouter.get('/users',auth.checkAuth,auth.allowRoles(['admin']),adminController.viewAllUsers);
// adminRouter.put('/users',auth.checkAuth,auth.allowRoles(['admin']),adminController.updateUser);
// adminRouter.delete('/users',auth.checkAuth,auth.allowRoles(['admin']),adminController.deleteUser);

module.exports=adminRouter;