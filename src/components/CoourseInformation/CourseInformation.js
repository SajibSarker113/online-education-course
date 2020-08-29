import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CourseInformation.css'
const CourseInformation = (props) => {
    const {name, instructor, price} = props.course;
    //console.log(props);
    return (
        <div className="course-design">
            <h3>Language course name: {name}</h3>
            <h4>Instructor name: {instructor}</h4>
            <h5>Course price: {price}</h5>
            <button 
            className="btn btn-success cursor" 
            onClick={() => props.handleAddCourse(props.course)}
            ><FontAwesomeIcon icon={ faShoppingCart } /> Enroll now</button> 
        </div>
    );
};

export default CourseInformation;