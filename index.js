import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
import connnectDB from './DB.js'
connnectDB()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})