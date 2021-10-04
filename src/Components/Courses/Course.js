import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import "./course.css"

const Course = (props) => {
    const { title, img, enrolled, price, time } = props.course
    return (
        <div>
            <div className="card m-3" style={{ width: "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">Enrolled:<FontAwesomeIcon className='mx-2' icon={faUser} />{enrolled}</p>
                        <p className="card-text">Duration: <FontAwesomeIcon className='mx-2' icon={faClock} />{time}</p>
                    </div>
                    <h4 className='text-center'>Price:${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default Course;