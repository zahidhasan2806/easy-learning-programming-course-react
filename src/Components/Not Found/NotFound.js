import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={error} alt="" />
            </div>
            <div className="text-center">
                <Link className='btn btn-primary m-5' to='/home'>Go Back To HomePage</Link>
            </div>
        </div>
    );
};

export default NotFound;