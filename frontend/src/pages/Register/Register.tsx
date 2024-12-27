import "./register.css"
import Button from "../../utils/Button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';

export default function Register() {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigation = useNavigate()

   async function handleRegister(){
      try{
         await axios.post('http://localhost:3000/auth/register', {
            name,
            email,
            password
         })
         navigation('/login')
      }catch(err){
         console.log('Error with registration', err)
      }
   }

   return (
      <div>
         <div className='sign-up-form'>

            <div className='Logo'>
               <img src="/Logo.png" className='Logo-Image' alt='logo'/>
            </div>

            <div className="input-field">
               <div className='name'>
                  <span>Name:</span>
                  <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
               </div>

               <div className='email'>
                  <span>Email:</span>
                  <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
               </div>

               <div className='password'>
                  <span>Password:</span>
                  <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
               </div>
            </div>

            <Button color={"#D5B893"} text={"Register"} handler={handleRegister} />

            <span>Already had an account? Click <Link to="/login"><span className="login-text">here</span></Link> to login</span>
            
         </div>
      </div>
   )
}
