import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connect=async()=>{
    const connectDB={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{

        await mongoose.connect(process.env.mongoDBURL,connectDB)
        console.log('connected successfully')
    }
    catch(e){
        console.log('connection failed',e.message)
    }
}
export default connect