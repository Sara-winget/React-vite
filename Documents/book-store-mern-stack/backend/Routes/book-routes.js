import express from 'express'
import { Book } from "../models/book.js"

const router = express.Router()

// Define the POST route
router.post('/create', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear)
            return res.status(400).send({message: 'Send all required fields'})
        
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }    
        
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    } catch(e) {
        console.log(e.message)
        res.status(500).send({message: e.message})
    }
})

router.get('/fetch/',async(req,res)=>{
    try{
        
  const books = await Book.find({})
  return res.status(200).json({count:books.length,data:books})
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({message:err.message})
    }
})
router.get('/fetch/:id',async(req,res)=>{
    try{
        const {id}=req.params
  //const book = await Book.findOne({_id:id})
  // Or
   const book = await Book.findById(id)
  return res.status(200).json({data:book})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message})
    }
})
router.put('/update/:id',async(req,res)=>{
    try{
        const {title , author ,publishYear} =req.body
        if(!title||!author||!publishYear)
            return res.status(400).send({message:'send all the required field'})
        const {id}=req.params
        const book = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if(!book)
            return res.status(400).json({message:"book not found"})
    return res.status(200).send({msg:"updated successfully",data:book})
}catch(e){
    console.log(e.message)
        res.status(500).send({message:e.message})
    }
})
router.patch('/update/:id',async(req,res)=>{
    try{
        const {title , author ,publishYear} =req.body
        // if(!title||!author||!publishYear)
            // return res.status(400).send({message:'send all the required field'})
        const {id}=req.params
        const book = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if(!book)
            return res.status(400).json({message:"book not found"})
    return res.status(200).send({msg:"updated successfully",data:book})
}catch(e){
    console.log(e.message)
        res.status(500).send({message:e.message})
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        
        const {id}=req.params
        const book = await Book.findByIdAndDelete(id,req.body,{new:true})
        if(!book)
            return res.status(400).json({message:"book not found"})
    return res.status(200).send({msg:"deleted successfully",data:book})
}catch(e){
    console.log(e.message)
        res.status(500).send({message:e.message})
    }
})




export default router