import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <button disabled = {props.disabled} onClick = {props.clicked} className = {classes[props.type]}>
            {props.children}
        </button>
    );
}
export default button;