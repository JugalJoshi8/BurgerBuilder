import React, { Component } from 'react';
import BurgerBuilder from './../../containers/burger-builder/BurgerBuilder';
import ToolBar from '../toolbar/Toolbar';
import SideDrawer from '../sidedrawer/SideDrawer';
import { Route, Switch } from 'react-router-dom';
import CheckOut from './../../containers/check-out/check-out';


class Layout extends Component {
    state = {
        showDrawer: false
    }

    hideDrawer = () => {
        this.setState({ showDrawer: false });
    }

    showDrawer = () => {
        this.setState({ showDrawer: true });
    }

    render() {
        return (
            <div>
                <SideDrawer show={this.state.showDrawer} hideDrawer={this.hideDrawer}></SideDrawer>
                <ToolBar showDrawer={this.showDrawer}></ToolBar>
                <Switch>
                    <Route path='/check-out' Component={CheckOut} />
                    <Route path='/' Component={BurgerBuilder} />
                </Switch>
            </div>

        )
    }
}

export default Layout;