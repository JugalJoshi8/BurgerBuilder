import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavList.module.css';

const navList = (props) => {
    return (
        <div className = {classes.NavList}>
           <NavItem>Burger Builder</NavItem>
           <NavItem>Check Out</NavItem>
        </div>
    )
}

export default navList;