
const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req , res)=>{  
    
        const tasks= await Task.find({})
        res.status(200).json({tasks})
        //res.status(200).json({tasks , amount:tasks.length})
        //res.status(200).json({status: 'success',  data:{tasks, ndHits:tasks.length}})
    
})

const createTask= asyncWrapper(async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask= asyncWrapper(async (req, res , next) =>{
   
        const{id:taskID}=req.params
        
 
    const task=await Task.findOne({_id:taskID});
    if(!task){
        const err= new Error('not found') ;
        err.status=404 ;
        return next(createCustomError(`No task with id: ${taskID}`,404)) ;
        
        //return res.status(4040).json({msg:'No task with id: ${taskID}'})
    }
    res.status(200).json({task})
    


})
const updateTask=asyncWrapper(async (req, res) =>{
  
        const {id:taskID} =req.params ;
        //res.status(200).json({id:taskID ,data:req.body})
        const task = await Task.findOneAndUpdate({_id : taskID}, req.body , {
            new: true ,
            runValidators: true,
            overWrirte: true,
        })
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404) );
        }
        res.status(200).json({task})
   })

const deleteTask= asyncWrapper( async (req, res) =>{
   
        const{id:taskID} = req.params ;
        const task=await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404) );
        }
        res.status(200).json({task})
   
   
})

module.exports ={getAllTasks, createTask , getTask , updateTask , deleteTask , }