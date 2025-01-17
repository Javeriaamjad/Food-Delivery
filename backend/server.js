import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 4000


//middleware
//whenever we will get th req from frontedn to backend  that will be parsed using this json
app.use(express.json())
app.use(cors())

//db connection 
connectDB();

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))



//http method to req the data from the server
app.get("/",(req,res)=>{
    res.send("API working")
})


//run the express server and provide the port num and pas a calll back function
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})


