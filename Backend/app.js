require("dotenv").config();
const express = require("express")
const cors = require("cors");
const mongodb = require("./configs/mongodb-config")

const app = express()
app.use(cors())

app.use(express.json())

const authRouter = require("./routes/auth-Router")

app.use("/api/auth", authRouter)

let PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`Backend is running on port ${PORT}`)
})