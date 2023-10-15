const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const port = process.env.PORT 
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

connectDB()

const app = express()

const goalRouter = require("./routes/goalRoutes")
const { connect } = require("mongoose")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals/",goalRouter)

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
