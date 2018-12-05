import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputField = null;
    const inputClasses = [classes.Input];
    if(!props.isValid && props.touched) {
        inputClasses.push(classes.InValid);
    }
    switch (props.type) {
        case 'input':
            inputField = <input className={inputClasses.join(' ')} {...props.config} value={props.value} onChange = {(e) => props.changed(e, props.identifier)}/>;
            break;
        case 'select':
            inputField = <select className={inputClasses.join(' ')} value = {props.value} onChange = {(e) => props.changed(e, props.identifier)}>
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