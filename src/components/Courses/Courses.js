import React, { useState } from 'react';
import fakeData from '../../fakeData/languages.js'
import './Courses.css'
import CourseInformation from '../CoourseInformation/CourseInformation.js';
import Cart from '../Cart/Cart.js';
const Courses = () => {
    
     const first13 = fakeData.slice(0, 13);
     const [courses, setCourses] = useState(first13);
    const [cart, setCart] = useState([]);

     const handleAddCourse = (course) => {
         console.log('course Added', course);
         const newCart = [...cart, course];
         setCart(newCart);
     }

    return (
        <div className="courses-container">
            <div className="course-details">
            {
            courses.map(course => <CourseInformation handleAddCourse={handleAddCourse} course={course} key={course.id}></CourseInformation>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Courses;