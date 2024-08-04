require("dotenv").config()
const express = require('express');
const cors=require("cors")
const app=express();
const userRouter = require("./api/users/user.route.js");


app.use(cors())
app.use(express.json());
app.get('/api',(req,res)=>{ 
    res.json({1:"API is running"})
})
app.use("/api/users", userRouter);
 
app.listen(5000 , ()=>{
    console.log("Server is up and running on PORT : ",5000);
});

