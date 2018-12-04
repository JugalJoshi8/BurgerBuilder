import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const order = props.order;
    return (
        <div className = {classes.Order}>
            <div>{`Price: ${order.price}`}</div>
            <div>{`Ingredients: Bacon ${order.ingredients.bacon}, Cheese ${order.ingredients.cheese}, Salad ${order.ingredients.salad}, Meat ${order.ingredients.meat}`}</div>
            <div>{`Address: House No. ${order.orderDetails.houseNo}, Street ${order.orderDetails.street}, City ${order.orderDetails.city}, Zipcode ${order.orderDetails.zipCode}`}</div>
            <div>{`Delivery Type: ${order.orderDetails.deliveryType}`}</div>
        </div>
    )
}

export default order;