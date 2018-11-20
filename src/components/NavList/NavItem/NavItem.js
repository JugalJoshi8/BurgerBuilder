import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => {
    return (
        <div className = {classes.NavItem}>
            <div>{props.children}</div>
        </div>
    )
}

export default navItem;