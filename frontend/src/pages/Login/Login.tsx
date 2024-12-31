import "./login.css"
import Button from "../../utils/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginSuccess, logoutSuccess } from "../../redux/authSlice"

export default function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')

   const dispatch = useDispatch()

   async function handleLogin(){
      try {
         const res = await axios.post('http://localhost:3000/auth/login', {
            email,
            password
         })
         const user = res.config.data
         dispatch(loginSuccess(user))

      } catch (err: any) {
         console.log('Error with login', err)
         setError(err.response.data.message)
      }
   }
   
   return (
      <div>
         <div className='sign-up-form'>

            <div className='Logo'>
               <img src="/Logo.png" className='Logo-Image' alt='logo'/>
            </div>

            {error && <div>{error}</div>}

            <div className="input-field">
               <div className='email'>
                  <span>Email:</span>
                  <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
               </div>

               <div className='password'>
                  <span>Password:</span>
                  <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
               </div>
            </div>

            <Button color={"#D5B893"} text={"Login"} handler={handleLogin} />

            <span>Don't have an account? Click <Link to="/register"><span className="register-text">here</span></Link> to register</span>
            
         </div>
      </div>
   )
}
