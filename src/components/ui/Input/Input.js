import React from 'react';

const Input = (props) => {
    return (
        <div>
            <label htmlFor=""></label>
            <input {...props.config}/>
        </div>
    )
}

export default Input;