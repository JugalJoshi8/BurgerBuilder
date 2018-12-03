import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            {/* <label htmlFor=""></label> */}
            <input className = {classes.Input} {...props.config}/>
        </div>
    )
}

export default Input;