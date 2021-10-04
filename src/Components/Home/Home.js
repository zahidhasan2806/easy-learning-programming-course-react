import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/banner-edu.jpg'
import './home.css'

const Home = () => {
    const [courseDemo, setCourseDemo] = useState([]);
    useEffect(() => {
        fetch("./service.JSON")
            .then(res => res.json())
            .then(data => setCourseDemo(data.slice(0, 4)));
    }, []);

    return (
        <>
            <div >
                <div className='banner'>
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="banner-info">
                                    <h1>The new way to learn properly is with us.</h1>
                                    <Link to='/service' className="btn banner-button">Get Started</Link>
                                </div>
                            </div>
                            <div className="banner-img col-md-6">
                                <img src={Banner} alt="/" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h1 >Our Services</h1>
                    <hr />
                </div>

                <div className="course-item container ">
                    {
                        courseDemo.map(courseItem => <div key={courseItem.img} >
                            <div className="card me-3 mt-3 mb-3" style={{ width: "20rem" }}>
                                <img src={courseItem.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{courseItem.title}</h5>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text">Enrolled:<FontAwesomeIcon className='mx-2' icon={faUser} />{courseItem.enrolled}</p>
                                        <p className="card-text">Duration: <FontAwesomeIcon className='mx-2' icon={faClock} />{courseItem.time}</p>
                                    </div>
                                    <h4 className='text-center'>Price:${courseItem.price}</h4>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;