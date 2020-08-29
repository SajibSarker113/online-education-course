import React from 'react';
import './Header.css'

const Header = () => {
    
    return (
        <div className='header'>
            <h1>Online Language Learning</h1>
            <nav>
                <a href="courses">Courses</a>
                <a href="reviews">Reviews</a>
                <a href="about">About us</a>
            </nav>
        </div>
    );
};

export default Header;