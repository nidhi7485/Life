const express = require('express')
require('dotenv').config()
const app = express()

// port
const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connect')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is running on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
