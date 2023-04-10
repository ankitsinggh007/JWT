const JWT=require('jsonwebtoken');

const authenticationMiddleware=async(req,res,next)=>{
    const Auth=req.headers.authorization;
    const token=Auth.split(' ')[1];

    if(!token ){
        throw Error;
    }
    try {
        const decoded=JWT.verify(token,process.env.Secret_key);
    const {id,username}=decoded;
    req.user={id,username};
    } catch (error) {
        console.log(error.message)
    }
    next();
}

module.exports=authenticationMiddleware;