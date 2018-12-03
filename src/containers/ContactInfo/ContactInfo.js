import React, { Component } from 'react';
import classes from './ContactInfo.module.css';
import Button from './../../components/ui/Button/Button';
import axios from './../../AxiosOrders';
import Input from './../../components/ui/Input/Input';

class ContactInfo extends Component {
    state = {
        formElements: {
            houseNo: {
                type: 'input',
                config: {
                    placeholder: 'Enter House No',
                    value: '',
                    type: 'text'
                }
            },
            street: {
                type: 'input',
                config: {
                    placeholder: 'Enter Street',
                    value: '',
                    type: 'text'
                }
            },
            city: {
                type: 'input',
                config: {
                    placeholder: 'Enter City',
                    value: '',
                    type: 'text'
                }
            },
            zipCode: {
                type: 'input',
                config: {
                    placeholder: 'Enter Zip code',
                    value: '',
                    type: 'text'
                }
            },
            deliveryType: {
                type: 'select',
                config: {
                    values: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }],
                    value: ''
                }
            }
        }
    }
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
        const formFields = [];
        for(let key in this.state.formElements) {
            formFields.push(<Input key = {key} config = {this.state.formElements[key]['config']} type = {this.state.formElements[key]['type']}></Input>);
        }
        return (
            <div>
                <div className={classes.ContactInfo}>
                   {formFields}
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