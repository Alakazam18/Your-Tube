import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import videoroutes from './Routes/video.js'
import userroutes from "./Routes/User.js"
import path from 'path'
import commentroutes from './Routes/comment.js'


dotenv.config()
const app=express()

app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))

app.get('/',(req,res)=>{
    res.send("Your tube is working")
})


app.use(bodyParser.json())
app.use('/user',userroutes)
app.use('/video',videoroutes)
app.use('/comment',commentroutes)
const PORT= 5000


app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})
const DB_URL="mongodb+srv://admin:admin@your-tube.zn8bc.mongodb.net/?retryWrites=true&w=majority&appName=Your-tube"
console.log(`DB URL: ${DB_URL}`) 
mongoose.connect(DB_URL).then(()=>{
    console.log("Mongodb Database connected")
}).catch((error)=>{
    console.log(error)
})