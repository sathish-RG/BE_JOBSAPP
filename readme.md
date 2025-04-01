# Job Portal Application


## Description
This is a job portal application that allows users to create an account, login, apply for jobs.

## Features

Candidate:

-Candidate can create an account.
-Candidate can login.
-Candidate can apply for a job.
-Candidate can view all jobs.
-Candidate can view the jobs they have applied for along with the status of their application.
-Candidate can view their profile, update their profile, and delete their profile.

Recruter:

-Recruter can login
-Recruter can create a job  
-Recruter can view all jobs they have posted
-Recruter can view all candidates that has applied for a job they have posted
-Recruter can view the status of a candidates application

Admin:

- Admin can login
- Admin can create recruter account
- Admin can create a company , delete, update
- Admin can assign a recruter to a company
- Admin can view candidates , delete, update

## Endpoints

-POST /candidates/register
-POST /candidates/login
-GET /candidates/jobs
-POST /candidates/jobs/:jobid/apply
-GET /candidate/jobs/applied
-GET /candidate/profile
-PUT /candidates/profile
-DELETE /candidates/profile
-GET /candidates/logout