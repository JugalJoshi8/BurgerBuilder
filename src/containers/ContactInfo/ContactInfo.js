import React, { Component } from 'react';
import classes from './ContactInfo.module.css';
import Button from './../../components/ui/Button/Button';
import axios from './../../AxiosOrders';

class ContactInfo extends Component {
    sendOrder = _ => {
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            address: {
                houseNo: '123',
                street: 'street1',
                city: 'city1',
                zipCode: '123456'
            }
        };
        axios.post('/orders.json', order).then((response) => {
            this.props.history.push('/');
        })
    }

    render() {
        console.log('started');
        return (
            <div>
                <div className={classes.ContactInfo}>
                    <input placeholder='Enter House No' type="text" />
                    <input placeholder='Enter street' type="text" />
                    <input placeholder='Enter City' type="text" />
                    <input placeholder='Enter zipcode' type="text" />
                </div>
                <div className={classes.OrderContainer}>
                    <Button type='Danger'>Cancel</Button>
                    <Button clicked={this.sendOrder} type='Success'>Order</Button>
                </div>
            </div>
        )
    }
}

export default ContactInfo;