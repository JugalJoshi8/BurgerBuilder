import React, { Component } from 'react';
import BurgerBuilder from './../../containers/burger-builder/BurgerBuilder';
import ToolBar from '../toolbar/Toolbar';
import SideDrawer from '../sidedrawer/SideDrawer';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../hoc/async-component/AsyncComponent';


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
        const asyncOrders = asyncComponent(() => import('./../../containers/orders/Orders'));
        const asyncCheckout = asyncComponent(() => import('./../../containers/check-out/CheckOut'));

        return (
            <div>
                <SideDrawer show={this.state.showDrawer} hideDrawer={this.hideDrawer}></SideDrawer>
                <ToolBar showDrawer={this.showDrawer}></ToolBar>
                <Switch>
                    <Route path='/check-out' component={asyncCheckout} />
                    <Route path='/' exact component={BurgerBuilder} />
                    <Route path='/orders' exact component={asyncOrders} />
                </Switch>
            </div>

        )
    }
}

export default Layout;