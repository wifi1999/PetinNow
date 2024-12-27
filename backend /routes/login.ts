import express, { Request, Response} from 'express'
import { User } from '../models/users'

const router = express.Router()

router.post('/login', async(req: Request, res: Response) => {
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
         message: "Login success"
      })

   }catch(err: any){
      res.status(400).json({
         status: 400,
         message: err.message.toString()
      })
   }
})

export default router