const JWT=require('jsonwebtoken');
require('dotenv').config();
// check if the given username and password are present or not?
// if present create JWT for and send it to frontend;
// setup authentication so that only authenticated user can see the dashboard ?
// const CustomAPI=require('../')

const Login=async(req,res)=>{
        const {username,password}=req.body;
      
    if (!username || !password){
        throw new  Error;
    }
    const id=new Date().getDate(); 

    const token= JWT.sign({username,id},process.env.Secret_key);
    res.status(201).json({
        token:token,
        message:'User is created'
    })
    
 }
const  dashboard=async(req,res)=>{
      
        const luckyNumber=Math.floor(Math.random()*100);
    console.log(req.user,"requser")
        res.status(200).json({
            msg:`hello ${req.user.username}`,
            secret:`here is your auth data,your lucky no. is ${luckyNumber}`
        })    

 };
 module.exports={
    Login,dashboard
 }