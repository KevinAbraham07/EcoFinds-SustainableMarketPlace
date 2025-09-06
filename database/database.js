import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectToDb = async()=>{
    try{
        await mongoose.connect(process.env.dbAddress);
        console.log("MongoDB connected successfully");
    }
    catch{
        console.error("MongoDB Connection Failed");
        process.exit(1);
    }
}

export default connectToDb;