import React, { Component } from 'react';
import classes from './ContactInfo.module.css';
import Button from './../../components/ui/Button/Button';

class ContactInfo extends Component {
    render() {
        return (
            <div>
                <div className={classes.ContactInfo}>
                    <input placeholder='Enter House No' type="text" />
                    <input placeholder='Enter street' type="text" />
                    <input placeholder='Enter City' type="text" />
                    <input placeholder='Enter zipcode' type="text" />
                </div>
                <div className = {classes.OrderContainer}>
                    <Button type = 'Danger'>Cancel</Button>
                    <Button type = 'Success'>Order</Button>
                </div>
            </div>
        )
    }
}

export default ContactInfo;