import { logoutSuccess } from "../../redux/authSlice"
import Button from "../../utils/Button"
import { useDispatch } from "react-redux"

export default function Home() {
   const dispatch = useDispatch()
   function handleLogOut(){
      try {
         dispatch(logoutSuccess(""))
      } catch (err) {
         console.log('Error with logout', err)
      }
   }
   return (
      <div>
         <Button color={"#D5B893"} text={"Logout"} handler={handleLogOut} />
         Home
      </div>
   )
}
