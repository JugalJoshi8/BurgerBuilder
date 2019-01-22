import React, {Component} from 'react';
import ServiceHandler from './../../components/hoc/service-handler/ServiceHandler';
import Order from './../../components/order/Order';
import {connect} from 'react-redux';
import * as actions from './../../store/actions'

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        const orders = this.props.orders.map(order => {
            return <Order order = {order} key = {order.key}></Order>
        });
        return (
            <div>
                <h2>List of orders</h2>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHandler(Orders));

