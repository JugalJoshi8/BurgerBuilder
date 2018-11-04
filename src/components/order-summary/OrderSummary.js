import React, { Component } from 'react';
import classes from './OrderSummary.module.css';
import Button from '../ui/Button/Button';

class OrderSummary extends Component {
    render() {

        const ingredients = Object.keys(this.props.ingredients).map((ingKey, index) => {
            return <div key = {index}>{ingKey.toUpperCase()}: {this.props.ingredients[ingKey]}</div>
        })
        return (
            <div className={classes.OrderSummary}>
                <h2>Order summar</h2>
                <h3>Below are burger ingredients</h3>
                {ingredients}
                <h3>Price: ${this.props.price}</h3>
                <div className = {classes.BtnCntr}>
                    <Button clicked = {this.props.onCancel} type = 'Danger'>Cancel</Button>
                    <Button clicked = {this.props.onOrder} type = 'Success'>Checkout</Button>
                </div>
            </div>

        )
    }
}

export default OrderSummary;
