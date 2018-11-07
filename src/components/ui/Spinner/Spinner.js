import React from 'react';
import classes from './Spinner.module.css';
import BackDrop from '../backdrop/Backdrop';

const spinner = () => (
    <div className = {classes.loaderParent}>
        <BackDrop show />
            <div className={classes.loader}></div>
    </div>
);

export default spinner;