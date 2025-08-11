import mongoose from "mongoose";
import {DB_NAME} from '../src/constants.js'

const connectDb = async()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected to DB | Host: ${connectInstance.connection.host}`)
    } catch (error) {
        console.log("Connection Error: ",error);
        process.exit(1);
    }
}
export default connectDb 