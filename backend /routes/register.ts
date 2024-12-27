import express, { Request, Response } from "express";
import { User } from '../models/users';

const router: express.Router = express.Router()

router.post('/register', async(req: Request, res: Response) => {
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
      console.log(err)

      res.status(400).json({
         status: 400,
         message: err.message.toString()
      })
   }
})

export default router