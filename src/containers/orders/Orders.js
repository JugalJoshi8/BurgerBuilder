import React, {Component} from 'react';
import ServiceHandler from './../../components/hoc/service-handler/ServiceHandler';
import Order from './../../components/order/Order';
import axios from './../../AxiosOrders';
class Orders extends Component {
    state = {orders: []};
    componentWillMount() {
        axios.get('orders.json').then((response) => {
            const orders = [];
            for(let key in response.data) {
                orders.push({...response.data[key], key: key});
            }
            this.setState({orders});
        })
    }
    render() {
        const orders = this.state.orders.map(order => {
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

export default ServiceHandler(Orders);

