import dotenv from 'dotenv';
import express from 'express';

dotenv.config({path: './.env'}); // looks for .env in root by default
import dbConnect from "../db/index.js";
import app from './app.js';
dbConnect().
then(()=>{
    app.listen(process.env.port || 8000,()=>{
        console.log(`Listening at ${process.env.port}`)
    })
}).
catch((err)=>{
    console.log("Database is failed to connect.. ",err);
})