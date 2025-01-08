const jwt= require('jsonwebtoken')
const {UnauthenticatedError } = require('../errors')

const CustomAPIErorr= require('../errors/custom-error')

const authenticationMiddleware = async(req , res , next) =>{
    const authHeader=req.headers.authorization ;
    
    if( !authHeader || !authHeader.startsWith('Bearer ')){

    throw new UnauthenticatedError ('no token provided',401);
    }

    const token = authHeader.split(' ')[1]
   
  
    try{
        const decoded= jwt.verify(token , process.env.JWT_SECRET)
      //  console.log(decoded) ;
       
      const{id , username} = decoded 
      req.user ={ id , username}
      next()
    
    
    }catch(error){
        //throw new Error(error.message)
       throw new UnauthenticatedError('Not Authorized to access this rout' , 401)
    }
    
}

module.exports = authenticationMiddleware