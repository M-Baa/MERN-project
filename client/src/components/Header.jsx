import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../src/assets/css/style/Header.css';
import logo from '../assets/image/logo.png';
import Timer from '../components/pages/Timer';


const Header = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ height: '50px' }}>
            {/* <img src={logo}></img> */}
            <div className="container-fluid">
            {/* <img src={logo} style={height:"50%"}></img> */}
                {/* <Link to="/" className="navbar-brand">Logo</Link> */}
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link text-center" href="#hero">Tournament</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community" className="nav-link scrollto text-center">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/shop' className="nav-link text-center" href="#hero">Shop</Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
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
                    </li>
                </ul>
            </div>
        </nav>


    
    );
};
export default Header;
