const connecDB = require('./db/connection')
require('dotenv').config()
const express=require('express')

const app=express() 
const  tasks  = require('./routes/tasks')

//middleware

app.use(express.json())

//rout

app.get('/hello' ,
    (req, res)=>{
res.send('Task manager app')
})

app.use('/api/v1/tasks', tasks)

const port=3000 
const start = async()=>{
    try{
        console.log("connectdb")
        await connecDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`server is listening on port ${port} ...`));
    }
    catch(error){
        console.log(error)
    }

}
start()

console.log('Task Manager App')
