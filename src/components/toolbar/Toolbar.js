import React from 'react';
import Logo from './Logo/Logo';
import NavList from '../NavList/NavList';
import classes from './ToolBar.module.css';

const toolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <div className={classes.Hamburger} onClick={props.showDrawer}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Logo></Logo>
            <div className = {classes.NavList}>
                <NavList></NavList>
            </div>

        </header>
    )
}

export default toolBar;