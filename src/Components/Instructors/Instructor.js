import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import "./instructors.css"

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./insturctor.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-5'>Our Instructors</h1>
            <div className="instructors mb-5 container">
                {/* getting instructor data dynamically */}
                {
                    instructors.map(instructor => <div key={instructor.img}>
                        <div className="card instructor" style={{ width: "22rem" }}>
                            <img src={instructor.img} className="card-img-top" alt="..." />
                            <div className="card-body instructor-info">
                                <h5 className="card-title">Name: {instructor.name}</h5>
                                <p className="card-text">{instructor.designation}</p>
                            </div>
                            <ul className='d-flex align-items-center'>
                                <li className='icons'><FontAwesomeIcon icon={faFacebookSquare} /></li>
                                <li className='icons'><FontAwesomeIcon icon={faInstagramSquare} /></li>
                            </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;