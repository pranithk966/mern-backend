const express = require('express')
const cors = require('cors')
const router = require('./Routers/routes')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ mssg: 'home page GET' })
})

app.use('/tasks', router)

const PORT = process.env.PORT || 4000
app.listen(PORT, (req, res) => {
  console.log('listening on port', PORT)
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => {
    console.log(err)
  })
