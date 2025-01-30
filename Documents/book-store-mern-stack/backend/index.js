import express from 'express'
import dotenv from 'dotenv'
import connect from'./db.js'
import cors from 'cors'
import { Book } from './models/book.js'
import bookRoutes from './Routes/book-routes.js'
dotenv.config()

const port=process.env.PORT||4444
const app = express()
app.use(express.json())
connect()
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','DELETE','PUT','PATCH'],
    allowedHeaders:['Content-Type'],
}))
app.get('/',(req,res)=>{
    console.log(req)
    return res.status('234').send('welcome to mern stack tutorial')
 // return res.status(234).json({ message: 'welcome to mern stack tutorial', note: 'always welcome' });


})
app.use('/books',bookRoutes)
app.listen(port,()=>{
    console.log(`app listening at port ${port}`,)
})