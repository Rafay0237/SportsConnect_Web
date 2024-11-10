import { useSelector } from "react-redux";
import { Navigate ,Outlet} from "react-router-dom"

const CheckUserIsLoggedRoute=()=>{
  const {currentUser}=useSelector(state=>state.user)

  return currentUser? <Navigate to="/profile"/>:
  <Outlet/>
}

export default CheckUserIsLoggedRoute