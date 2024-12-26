import "./login.css"
import Buttons from "../../utils/Button"
import { Link } from "react-router-dom"

export default function Login() {
   return (
      <div>
         <div className='sign-up-form'>

            <div className='Logo'>
               <img src="/Logo.png" className='Logo-Image' alt='logo'/>
            </div>

            <div className="input-field">
               <div className='email'>
                  <span>Email:</span>
                  <input type="text" />
               </div>

               <div className='password'>
                  <span>Password:</span>
                  <input type="text" />
               </div>
            </div>


            <Buttons color={"#D5B893"} text={"Login"}/>

            <span>Don't have an account? Click <Link to="/register"><span className="register-text">here</span></Link> to register</span>
            
         </div>
      </div>
   )
}
