import React from 'react';
import Logo from '../toolbar/Logo/Logo';
import NavList from '../NavList/NavList';
import classes from './SideDrawer.module.css';
import BackDrop from '../ui/backdrop/Backdrop';
import RootDiv from '../hoc/root-div/RootDiv';

const sideDrawer = (props) => {
    let drawerClasses = [classes.SideDrawer];
    if(props.show) {
        drawerClasses.push(classes.Show);
    }
    return (<RootDiv>
        <BackDrop show = {props.show} clicked = {props.hideDrawer} ></BackDrop>
        <div className={drawerClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <NavList></NavList>
        </div>
    </RootDiv>)
}

export default sideDrawer; 