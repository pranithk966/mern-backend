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

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, (req, res) => {
      console.log('connected to db & running on port', process.env.PORT || 4000)
    })
  })
  .catch((err) => {
    console.log(err)
  })
