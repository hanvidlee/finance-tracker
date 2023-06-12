const express = require('express')
const cors = require('cors')
const app = express()
const { db } = require('./db/db')

require('dotenv').config()

const PORT = process.env.PORT

//middleware
app.use(express.json())
app.use(cors({
}))

//checking if server is working
app.get('/', (req, res) => {
  res.send('Hello World')
})

const server = () => {
  db()
  app.listen(PORT, () => {
    console.log('listenting to port: ', PORT)
  })
}

server()