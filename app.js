const express = require('express');
const app=express();
const cookieParser=require('cookie-parser');
const morgan=require('morgan');
const cors=require('cors');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes')


app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
  origin:'*',
  credentials:true
}));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);



module.exports=app;