import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='text-center'>
                                <h1 className="mb-3">Easy Learning</h1>
                                <ul className="d-flex justify-content-center">
                                    <li className='icon'>
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </li>
                                    <li className='icon'>
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </li>
                                    <li className='icon'>
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </li>
                                    <li className='icon'>
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="d-flex align-items-start justify-content-center flex-column">
                                <Link to='/home' className="footer-menu">Home</Link>
                                <Link to='/about' className="footer-menu"> About us</Link>
                                <Link to='/service' className="footer-menu">Services</Link>
                                <Link to='/instructor' className="footer-menu">Instructor</Link>
                                <Link to='*' className="footer-menu">Terms & conditions</Link>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3>Sign up for the newsletter</h3>
                                <div className="input-group mb-3 w-75">
                                    <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="input-group-text btn btn-primary btn-outline-success text-dark" id="basic-addon2" >Register Now</button>
                                </div>
                                <div className="phone d-flex align-items-center mt-4">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </div>
                                    <div>
                                        <h5>Mobile: <small>+880 1646190607</small></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="mt-5">
                        <small>Zahid ZaM ©All rights reserved.</small>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;