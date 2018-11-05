import React from 'react';
import BurgerBuilder from './../../containers/burger-builder/BurgerBuilder';
import ToolBar from '../toolbar/Toolbar';
const layout = () => {
    return (
        <div>
            <ToolBar></ToolBar>
            <BurgerBuilder></BurgerBuilder>
        </div>

    )
} 

export default layout;