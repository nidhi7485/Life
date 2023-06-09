const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
// port
const port = process.env.PORT || 5000

// db
const connectDB = require('./db/connect')

// middleware
app.use(express.json())
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
// router
const userRouter = require('./routes/userRoutes')
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/api/v1', userRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is running on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
