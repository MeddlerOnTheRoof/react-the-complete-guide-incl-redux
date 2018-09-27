import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input onChange={props.change} value={props.value} />
        </div>
    );
}

export default userInput; 
