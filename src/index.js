import dotenv from "dotenv"
import connectDB from './db/index.js'
import express from "express"
const app = express()

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR: ", error)
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err)
})


/*
const app = express()
(async()=>{
 try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("error", (error)=>{
        console.log("ERROR: ", error)
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
 }catch(err){
    console.error("ERROR :" , err)
    throw err
 }
})()
*/ 

