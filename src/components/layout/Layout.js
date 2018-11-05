import React, {Component} from 'react';
import BurgerBuilder from './../../containers/burger-builder/BurgerBuilder';
import ToolBar from '../toolbar/Toolbar';
import SideDrawer from '../sidedrawer/SideDrawer';

class Layout extends Component {
    state = {
        showDrawer: false
    }

    hideDrawer = () => {
        this.setState({showDrawer: false}); 
    }

    showDrawer = () => {
        this.setState({showDrawer: true}); 
    }

    render() {
        return (
            <div>
                <SideDrawer show = {this.state.showDrawer} hideDrawer = {this.hideDrawer}></SideDrawer>
                <ToolBar showDrawer = {this.showDrawer}></ToolBar>
                <BurgerBuilder></BurgerBuilder>
            </div>
    
        )
    }   
} 

export default Layout;