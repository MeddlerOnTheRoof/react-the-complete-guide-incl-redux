import React from 'react';
import './Person.css';

const person = (props) => {
    // note that in class based components it is this.props
    // props refers to the properties of the element
    // children is a reserved props.property
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;
