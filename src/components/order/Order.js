import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const order = props.order;
    return (
        <div className = {classes.Order}>
            <div>{`Price: ${order.price}`}</div>
            <div>{`Ingredients: Bacon ${order.ingredients.bacon}, Cheese ${order.ingredients.cheese}, Salad ${order.ingredients.salad}, Meat ${order.ingredients.meat}`}</div>
            <div>{`Address: House No. ${order.address.houseNo}, Street ${order.address.street}, City ${order.address.city}, Zipcode ${order.address.zipCode}`}</div>
        </div>
    )
}

export default order;