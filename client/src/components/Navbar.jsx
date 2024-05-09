import React from 'react'
import { Link } from 'react-router-dom'
import img from '../static/images/c9-logo.png'
import "../static/css/navbar.css"
import { useSelector } from 'react-redux';


const Navbar = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='op'>
            <nav className='navbar'>
                <div className='left'>
                    <Link to="/"><img className='logo' src={img} alt="logo" /></Link>
                </div>
                <div className='center'>
                    <Link className="links" to="/tournament"> Tournament</Link>
                    <Link className="links" to="/community"> Community</Link>
                    <Link className="links" to="/shop"> Shop</Link>
                    <Link to="/profile" className="nav-link">
                            {currentUser ? (
                                <img
                                    src={currentUser.profile_picture}
                                    alt="profile"
                                    className="rounded-circle h-7 w-7 object-cover border border-gray-300"
                                    style={{ height: '30px' }} // Adjust height here
                                />
                            ) : (
                                'Login'
                            )}
                        </Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar