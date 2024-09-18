import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../Redux/Slices/AuthSlice";

function Logout(){

    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    
    const dispatch = useDispatch()
    
   function handleLogout(e){
    e.preventDefault();
    if(isLoggedIn)
    dispatch(logout())
   }
   function handleLoggeIn(){
    isLoggedIn
   }

    return(<>
    <div>
        <ul className='flex gap-4'>
            <li className="hover:text-[#FF9110]" >
                {isLoggedIn ?
                (<Link onClick={handleLogout}>LogOut</Link>):
                <Link to={'/auth/login'} onClick={handleLoggeIn} >LogIn</Link>}
            </li>
        </ul>
    </div>
    
    </>)
}

export default Logout;