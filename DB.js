import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()




const connnectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`\n MongoDB connected! DB Host: }`);  
    } catch (error) {
        console.log("MongoDB connection error " , error);
        process.exit(1)
        
    }
}

export default connnectDB