import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../Redux/Slices/AuthSlice";

function Logout(){

    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const dispatch = useDispatch()
    
   function handleLogout(e){
    e.preventDefault();
    dispatch(logout())
   }

    return(<>
    <div>
        <ul className='flex gap-4'>
            <li className="hover:text-[#FF9110]" >
                {isLoggedIn ?
                (<Link onClick={handleLogout}>LogOut</Link>):
                <Link to={'/auth/login'} >LogIn</Link>}
            </li>
        </ul>
    </div>
    
    </>)
}

export default Logout;