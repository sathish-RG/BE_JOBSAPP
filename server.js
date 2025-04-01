const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const app =require('./app');

console.log(`Connecting to DB...`);
mongoose.connect(MONGODB_URI)
.then(() => {
 console.log(`DB connected successfully`);

 //start the server
 app.listen(PORT, ()=>{
  console.log(`server is runing @ http://localhost:${PORT}`)
 })

})
.catch((err)=>{
    
    console.log(`Error in DB connection: ${err}`);
})