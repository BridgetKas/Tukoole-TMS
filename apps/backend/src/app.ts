import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import connectDB from './config/db'


const app = express()

app.use(express.json())
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))


export default app