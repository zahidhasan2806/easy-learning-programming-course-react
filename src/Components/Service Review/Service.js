import React, { useEffect, useState } from 'react';
import Course from '../Courses/Course';
import "./Services.css"

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = './service.JSON';
        fetch(url)
            .then(res => res.json())
            .then(courses => setServices(courses))
    }, [])
    return (
        <div>
            <div className="container">
                <h1>Our Courses</h1>
                <hr />
            </div>
            <div className='courses-container container'>
                {
                    services.map(course => <Course course={course} key={course.title}></Course>)
                }
            </div >
        </div>
    );
};

export default Service;