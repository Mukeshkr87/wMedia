import dotenv from 'dotenv';
import connectDb from '../db/index.js';

dotenv.config({ path: '../.env' });

connectDb();












/*  Simple approach
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("ERROR:",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listing at ${process.env.PORT}`);
        })
    
    }
    catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()
*/