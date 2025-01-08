const jwt = require('jsonwebtoken')
//const CustomAPIErorr= require('../errors/custom-error')
const {BadRequestError} = require('../errors')
const  login = async (req, res)=>{

    const {username , password} = req.body ;

    if(!username || !password){
           throw new BadRequestError ('please provide email and password');
   }

// mongo

//Joi

//
     const id= new Date().getDate()
     const secret = process.env.JWT_SECRET;
     if (!secret) {
         throw new BadRequestError('JWT_SECRET is not defined in the environment variables');
     }
      const token = jwt.sign({ id, username }, secret, {
        expiresIn: '30d',
      })
      res.status(200).json({ msg: 'user created', token })
   // res.send('Fake Login/Register/Signup Rout ')
}


const dashboard = async (req, res) => {

    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100)
    
    res.status(200).json({
    msg: `Hello, ${req.user.username} `,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })
    

}
  
  module.exports = {
    login,
    dashboard,
  }
  