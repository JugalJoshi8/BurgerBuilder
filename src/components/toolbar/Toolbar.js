import React from 'react';
import Logo from './Logo/Logo';
import NavList from '../NavList/NavList'; 
import classes from './ToolBar.module.css';

const toolBar = () => {
    return (
        <header className = {classes.ToolBar}>
            <div className = {classes.Hamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo></Logo>
            <NavList></NavList>
        </header>
    )
}

export default toolBar;