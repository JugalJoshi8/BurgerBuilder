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
                    type: 'text'
                },
                value: ''
            },
            street: {
                type: 'input',
                config: {
                    placeholder: 'Enter Street',
                    type: 'text'
                },
                value: ''
            },
            city: {
                type: 'input',
                config: {
                    placeholder: 'Enter City',
                    type: 'text'
                },
                value: ''
            },
            zipCode: {
                type: 'input',
                config: {
                    placeholder: 'Enter Zip code',
                    type: 'text'
                },
                value: ''
            },
            deliveryType: {
                type: 'select',
                config: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: 'fastest'
            }
        }
    }

    onInputChange = (e, id) =>{
        const updatedFormElements = {...this.state.formElements};
        const updatedFormElement = {...updatedFormElements[id]};
        updatedFormElement.value = e.target.value;
        updatedFormElements[id] = updatedFormElement;
        this.setState({formElements: updatedFormElements})
    }

    sendOrder = (e) => {
        e.preventDefault();
        const orderDetails = {};
        for(let key in this.state.formElements) {
            orderDetails[key] = this.state.formElements[key]['value'];
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderDetails
        };
        axios.post('/orders.json', order).then((response) => {
            this.props.history.push('/');
        });
    }

    render() {
        const formFields = [];
        for(let key in this.state.formElements) {
            formFields.push(<Input key = {key} identifier = {key} changed = {(e, id) => this.onInputChange(e, id)} value = {this.state.formElements[key]['value']} config = {this.state.formElements[key]['config']} type = {this.state.formElements[key]['type']}></Input>);
        }
        return (
            <form onSubmit = {e => this.sendOrder(e)}>
                <div className={classes.ContactInfo}>
                   {formFields}
                </div>
                <div className={classes.OrderContainer}>
                    <Button type='Danger'>Cancel</Button>
                    <Button  type='Success'>Order</Button>
                </div>
            </form>
        )
    }
}

export default ContactInfo;