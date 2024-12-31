import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRouter from './routes/auth'
import ErrorHandler from './middlewares/errorHandler'

const app: Application = express();
const port: number = 3000;

// Cors
app.use(cors())
dotenv.config()

// Parser
app.use(express.json())
app.use(
   express.urlencoded({
      extended: true
   })
)

// Routers
app.use('/auth', AuthRouter)
app.use(ErrorHandler)

app.listen(port, async () => {
   console.log(`Server is running on http://localhost:${port}`);

   try{
      await mongoose.connect(
         process.env.MONGO_URL as string
      )
      console.log('connected to MongoDB')
   }catch(err){
      console.log('Error connected to MongoDB', err)
   }
});