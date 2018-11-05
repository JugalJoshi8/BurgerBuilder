import React from 'react';
import logoImage from '../../../assets/imgs/burger-logo.png';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src = {logoImage} alt = 'burger logo'/>
        </div>
    )
}

export default logo;