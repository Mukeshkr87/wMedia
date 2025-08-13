import dotenv from 'dotenv'
import dbName from '../constant/dbConstant.js'
import mongoose from 'mongoose'
dotenv.config({path:'../.env'})
const dbConnect = async()=>{
    try {
        const dbSchema = await mongoose.connect(`${process.env.DB_LINK}/${dbName}`);
        console.log("Connected sucessfully | Host:", dbSchema.connection.host);
    } catch (error) {
        console.log("Something went wrong at ./db/index.js",error);
        process.exit(1);
    }
}
export default dbConnect;