import React, { Component } from 'react';
import Burger from '../../components/burger/Burger';
import Button from '../../components/ui/Button/Button';
import classes from './CheckOut.module.css';
import {Route} from 'react-router-dom';
import ContactInfo from './../ContactInfo/ContactInfo';

class CheckOut extends Component {
    state = {
        ingredients: null
    }

    componentWillMount() {
        let ingredients = {};
        const searchQuery = new URLSearchParams(this.props.location.search).entries();
        for(let query of searchQuery) {
            ingredients[query[0]] = +query[1]; 
        }
        this.setState({ingredients: ingredients});
    }

    goToContactInfo = () => {
        console.log(this.props);
        this.props.history.push('check-out/contact-info');
    }

    render() {
        if(!this.state.ingredients) {
            return null;
        }
        return (
            <div>
                <h2>Below is your burger</h2>
                <Burger ingredients={this.state.ingredients} />
                <div className = {classes.BtnContainer}>
                    <Button type ='Danger'>Cancel</Button>
                    <Button clicked = {this.goToContactInfo} type = 'Success'>Contact Info</Button>
                </div>
                <Route path = {`{this.props.match.path}${'/contact-info'}`} render = {_ => <ContactInfo ingredients = {this.state.ingredients}></ContactInfo>}/>
            </div>
        )
    }
}

export default CheckOut;