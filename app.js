const express = require('express');
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
require('dotenv').config()


//////////// Importing Routes ///////////
const authRoute=require('./routes/auth')



app.use(express.json())
// connect to DB
mongoose.connect(process.env.LOCAL_DB_CONNECT,
{
    useNewUrlParser:true
},
()=>{
    console.log('DataBase connected') 
})


// Routes
app.use('/api/user',authRoute)

app.get('/',(req,res)=>{
    res.send({status:'ok'})
})

app.listen(3000,()=>console.log("server is running on port 3000"))
