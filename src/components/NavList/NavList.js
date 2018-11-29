import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavList.module.css';
import { NavLink } from 'react-router-dom';

const navList = (props) => {
    return (
        <div className={classes.NavList}>
            <NavLink exact activeClassName = {classes.activeNavLink} className = {classes.navLink} to = '/'><NavItem>Burger Builder</NavItem></NavLink>
            <NavLink activeClassName = {classes.activeNavLink} className = {classes.navLink} to = '/orders'><NavItem>Orders</NavItem></NavLink>
        </div>
    )
}

export default navList;