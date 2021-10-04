import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'red',
        backgroundColor: 'white',
        borderRadius: '5px'
    }
    return (
        <div className="nav-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <Link to='/home'>
                            <img className='w-75 logo' src='/logo.png' alt="" />
                        </Link>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-center mt-2 justify-content-end">
                                <NavLink activeStyle={activeStyle} to="/home" className="nav-item mx-4">
                                    <li className='nav-list' >Home</li>
                                </NavLink>
                                <NavLink activeStyle={activeStyle} to="/about" className="nav-item mx-4">
                                    <li>About Us</li>
                                </NavLink>
                                <NavLink activeStyle={activeStyle} to="/service" className="nav-item mx-4">
                                    <li>Services</li>
                                </NavLink>
                                <NavLink activeStyle={activeStyle} to="/instructor" className="nav-item mx-4">
                                    <li>Instructors</li>
                                </NavLink>
                                <NavLink activeStyle={activeStyle} to="/blogs" className="nav-item mx-4">
                                    <li>Blogs</li>
                                </NavLink>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;