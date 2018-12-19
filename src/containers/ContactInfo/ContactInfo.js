import React, { Component } from 'react';
import classes from './ContactInfo.module.css';
import Button from './../../components/ui/Button/Button';
import axios from './../../AxiosOrders';
import Input from './../../components/ui/Input/Input';
import {connect} from 'react-redux';

class ContactInfo extends Component {
    state = {
        formElements: {
            houseNo: {
                type: 'input',
                config: {
                    placeholder: 'Enter House No',
                    type: 'text'
                },
                value: '',
                validations: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            street: {
                type: 'input',
                config: {
                    placeholder: 'Enter Street',
                    type: 'text'
                },
                value: '',
                validations: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            city: {
                type: 'input',
                config: {
                    placeholder: 'Enter City',
                    type: 'text'
                },
                value: '',
                validations: {
                    required: true
                },
                isValid: false,
                touched: false
            },
            zipCode: {
                type: 'input',
                config: {
                    placeholder: 'Enter Zip code',
                    type: 'text'
                },
                value: '',
                validations: {
                    required: true,
                    minLength: 5,
                    maxLength: 8
                },
                isValid: false,
                touched: false
            },
            deliveryType: {
                type: 'select',
                config: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: 'fastest',
                validations: {},
                isValid: true,
                touched: false
            }
        },
        isFormValid: false
    }

    isValid = (value, validations) => {
        let isValid = true;
        if(validations.required) {
            isValid = value && value.trim();
        }
        if(validations.minLength) {
            isValid = isValid && (value.length >= validations.minLength);
        }
        if(validations.maxLength) {
            isValid = isValid && (value.length <= validations.maxLength);
        }
        return isValid;
    }

    onInputChange = (e, id) =>{
        const updatedFormElements = {...this.state.formElements};
        const updatedFormElement = {...updatedFormElements[id]};
        updatedFormElement.value = e.target.value;
        updatedFormElement.isValid = this.isValid(updatedFormElement.value, updatedFormElement.validations);
        updatedFormElements[id] = updatedFormElement;
        updatedFormElement.touched = true;
        let isFormValid = true;
        for(let key in updatedFormElements) {
            if(!updatedFormElements[key]['isValid']) {
                isFormValid = false;
                break;
            }
        }
        this.setState({formElements: updatedFormElements, isFormValid})
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
            formFields.push(<Input key = {key} identifier = {key} changed = {(e, id) => this.onInputChange(e, id)} 
            isValid = {this.state.formElements[key]['isValid']} value = {this.state.formElements[key]['value']} 
            config = {this.state.formElements[key]['config']} type = {this.state.formElements[key]['type']} 
            touched= {this.state.formElements[key]['touched']}>
            </Input>);
        }
        return (
            <form onSubmit = {e => this.sendOrder(e)}>
                <div className={classes.ContactInfo}>
                   {formFields}
                </div>
                <div className={classes.OrderContainer}>
                    <Button type='Danger'>Cancel</Button>
                    <Button  disabled = {!this.state.isFormValid} type='Success'>Order</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.price
    }
}

export default connect(mapStateToProps)(ContactInfo);