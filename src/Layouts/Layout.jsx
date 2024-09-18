import Footer from '../components/Footer';
import Pizzalogo from '../assets/Images/pizza1.png';
import Logout from '../pages/Auth/Logout';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { getCartDetails } from '../Redux/Slices/CartSlice';
import CartIcon from '../assets/Images/cart.svg';
import { logout } from '../Redux/Slices/AuthSlice';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    const navigate = useNavigate()
    const isLoggedIn =  useSelector((state)=> state.auth.isLoggedIn)
    const {cartsData} = useSelector((state)=>state.cart)
    // const dispatch = useDispatch();
    console.log(cartsData)

    // async function handleLogout(e) {
    //     e.preventDefault();
    //     dispatch(logout());
        
    // // }

    // async function fetchCartDetails() {
    //     const res = await dispatch(getCartDetails());
    //     console.log("cart details", res)
       
    // }

    // useEffect(() => {
       
    //     if(isLoggedIn) {
    //         fetchCartDetails();
    //     }
    // }, []);
    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                <div className="flex items-center justify-center  cursor-pointer"
                 onClick={()=>navigate('/')}>
                    <p>Pizza App</p>
                    <img src={Pizzalogo} alt="Pizza logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4 '>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p className='cursor-pointer'>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p className='cursor-pointer'>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p className='cursor-pointer'>About {' '}</p>
                        </li>
                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <Link to = {'/products'}className='cursor-pointer' lin>All Products {' '}</Link>
                        </li>
                        
                     
                        
                    </ul>

                </div>
                <Logout/>
                {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    {' '}
                                    <p className='text-black inline'>{cartsData?.items?.length}</p>
                                </li>
                            </Link>
                            
                        )}
            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;