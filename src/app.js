import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
const { urlencoded } = bodyParser;
const app = express();
app.use(cors({
    orgin:process.env.cors_orgin,
    credentials: true
}))
//middlewares
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());

import userRouter from '../routes/user.routes.js'

//routes decleration
app.use("/api/v1/users",userRouter)    

export  default app;