const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const contactRoutes = require('./routes/contact.route')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

mongoose.connect(MONGO_URI)
  .then(() => {
    
    console.log(`Server running at ${PORT}`)
    app.use(contactRoutes)
    app.listen(3000)

  });