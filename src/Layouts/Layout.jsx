import Footer from '../components/Footer';
import Pizzalogo from '../assets/Images/pizza1.png';
import Logout from '../pages/Auth/Logout';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                <div className="flex items-center justify-center">
                    <p>Pizza App</p>
                    <img src={Pizzalogo} alt="Pizza logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110]'>
                            { ' ' }
                            <p>About {' '}</p>
                        </li>

                    </ul>
                </div>
                <Logout/>

            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;