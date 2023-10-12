const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT 
const {errorHandler} = require("./middleware/errorMiddleware")

const app = express()

const goalRouter = require("./routes/goalRoutes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals/",goalRouter)

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
