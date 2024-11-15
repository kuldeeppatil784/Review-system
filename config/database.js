import mongoose from "mongoose";
const dbconnect=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
        console.log("MondoDB connected successfully")
        
    }catch(error){
        console.log("connectino failed",error)
        
    }
}
export default dbconnect;
