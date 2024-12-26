import "./register.css"
import Buttons from "../../utils/Button"
import { Link } from "react-router-dom"

export default function Register() {

   return (
      <div>
         <div className='sign-up-form'>

            <div className='Logo'>
               <img src="/Logo.png" className='Logo-Image' alt='logo'/>
            </div>

            <div className="input-field">
               <div className='name'>
                  <span>Name:</span>
                  <input type="text" />
               </div>

               <div className='email'>
                  <span>Email:</span>
                  <input type="text" />
               </div>

               <div className='password'>
                  <span>Password:</span>
                  <input type="text" />
               </div>
            </div>


            <Buttons color={"#D5B893"} text={"Register"} />

            <span>Already had an account? Click <Link to="/login"><span className="login-text">here</span></Link> to login</span>
            
         </div>
      </div>
   )
}
