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
    try {
        const Auth=req.headers.authorization;
        const token=Auth.split(' ')[1];

        // if(!token ){
        //     throw Error;
        // }
        const luckyNumber=Math.floor(Math.random()*100);

        try {
        const decode =JWT.verify(token,process.env.Secret_key);
            // console.log(decode);
        res.status(200).json({
            msg:`hello ${decode.username}`,
            secret:`here is your auth data,your lucky no. is ${luckyNumber}`
        }) 
        } catch (error) {

            res.json({
                
                msg:"please login before getting any result",
                secret : 'none'
        }
            )
            
            console.log(error.message);
            throw error.message;
            
        }
    
    } catch (error) {
        throw error;
    }

 };
 module.exports={
    Login,dashboard
 }