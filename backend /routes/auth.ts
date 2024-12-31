import express, { NextFunction, Request, Response } from "express";
import { User } from '../models/users';

const router: express.Router = express.Router()

router.post('/register', async(req: Request, res: Response, next: NextFunction) => {
   try{
      const user = req.body;
      const { name, email, password } = user

      const emailExist = await User.findOne({
         email: email
      })

      if(emailExist){
         res.status(400).json({
            status: 400,
            message: "Email already in use"
         })
         return;
      }

      const newUser = await User.create({
         name, 
         email, 
         password
      })

      res.status(200).json({
         status: 200,
         success: true,
         message: "User created successfully",
         user: newUser
      })

   }catch(err: any){
      // res.status(400).json({
      //    status: 400,
      //    message: err.message.toString()
      // })
      next(err)
   }
})

router.post('/login', async(req: Request, res: Response, next: NextFunction) => {
   try{
      const user = req.body
      const { email, password } = user

      const userExist = await User.findOne({
         email: email
      })

      if(!userExist){
         res.status(404).json({
            status: 404,
            success: false,
            message: "User Not Found"
         })
         console.log('here')
         return;
      }

      const passwordMatch = userExist?.password === password

      if(!passwordMatch){
         res.status(400).json({
            status: 404,
            success: false,
            message: "Wrong password"
         })
         return;
      }

      res.status(200).json({
         status: 200,
         success: true,
         message: "Login success",
      })

   }catch(err: any){
      // res.status(400).json({
      //    status: 400,
      //    message: err.message.toString()
      // })
      next(err)
   }
})

export default router