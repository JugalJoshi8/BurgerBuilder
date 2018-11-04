import React from 'react';
import classes from './Modal.module.css';
const modal = (props) => {
    const className = props.show ? classes.Modal : (classes.Modal + ' ' + classes.HideModal);
    return (
        <div className = {className}>
            {props.children}
        </div>
    )  
}

export default modal;