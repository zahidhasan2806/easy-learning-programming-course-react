import { faFolder, faUserAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './about.css'

const About = () => {
    return (
        <div >
            <div className='container'>
                <div className='my-5'>
                    <h1>Our Mission</h1>
                    <blockquote className='fw-bold text-center'> "The only way to learn a new programming language is by writing programs in it."</blockquote>
                    <p>The mission of our learning site is to build a quality and comprehensive technology infrastructure, establish and maintain an effective operational environment, and deliver quality, prompt, cost effective and reliable technology services.Programmers are mostly "learn by doing" types.Our mission is to make coding easier for programmers. Spreading all the updates in the world of programming to everyone. </p>
                </div>
                <div className='my-5'>
                    <h1>Our Vision</h1>
                    <p>To create a better every day life for the many people.Become essential to our students by providing differentiate products and services to help them achieve their aspirations. We mainly focused on our student's satisfaction. Our main motto is to make the world easier with technology and make sure that people get benefits from us.</p>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className="row justify-content-between container">
                        <div className="col-lg-4 col-md-6 col-sm-6 text-center">
                            <FontAwesomeIcon className='about-icon' icon={faUserAlt} />
                            <p>Instructor: 10</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 text-center">
                            <FontAwesomeIcon className='about-icon' icon={faUserGraduate} />
                            <p>Total Enrolled: 1000+</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <FontAwesomeIcon className='about-icon' icon={faFolder} />
                            <p>10+ Topics</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;