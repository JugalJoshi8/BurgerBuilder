import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputField = null;
    switch (props.type) {
        case 'input':
            inputField = <input className={classes.Input} {...props.config} value={props.value} onChange = {(e) => props.changed(e, props.identifier)}/>;
            break;
        case 'select':
            inputField = <select className={classes.Input} value = {props.value} onChange = {(e) => props.changed(e, props.identifier)}>
                {props.config.options.map(option => <option key = {option.value} value = {option.value}>{option.displayValue}</option>)}
            </select>;
            break;
        default:
            break;
    }
    return (
        <div>
            {/* <label htmlFor=""></label> */}
           {inputField}
        </div>
    )
}

export default Input;