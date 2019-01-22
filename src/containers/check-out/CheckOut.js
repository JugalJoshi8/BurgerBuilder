import React, { Component } from 'react';
import Button from '../../components/ui/Button/Button';
import classes from './CheckOut.module.css';
import {Route, Redirect} from 'react-router-dom';
import ContactInfo from './../ContactInfo/ContactInfo';
import serviceHandler from './../../components/hoc/service-handler/ServiceHandler';
import {connect} from 'react-redux';

class CheckOut extends Component {

    // componentWillMount() {
    //     let ingredients = {};
    //     const searchQuery = new URLSearchParams(this.props.location.search).entries();
    //     for(let query of searchQuery) {
    //         if(query[0] === 'price') {
    //             this.setState({'price': query[1]});
    //         }
    //         else {
    //             ingredients[query[0]] = +query[1]; 
    //         }
    //     }
    //     this.setState({ingredients: ingredients});
    // }

    goToContactInfo = () => {
        console.log(this.props);
        this.props.history.push('check-out/contact-info');
    }

    render() {
        let redirect = null;
        if(!this.props.ingredients || this.props.purchased) {
            redirect = <Redirect to = '/'></Redirect>;
        }
        return (
            <div className = {classes.Wrapper}>
                {redirect}
                <h2>Below are your burger ingredients</h2>
                <div className = {classes.Ingredients}>
                    <div>Cheese: {this.props.ingredients.cheese}</div>
                    <div>Salad: {this.props.ingredients.salad}</div>
                    <div>Meat: {this.props.ingredients.meat}</div>
                    <div>Bacon: {this.props.ingredients.bacon}</div>
                </div>
                {/* <Burger ingredients={this.state.ingredients} /> */}
                <div className = {classes.BtnContainer}>
                    <Button type ='Danger'>Cancel</Button>
                    <Button clicked = {this.goToContactInfo} type = 'Success'>Contact Info</Button>
                </div>
                <Route path = {`${this.props.match.path}/contact-info`} component = {ContactInfo}/>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.price,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(serviceHandler(CheckOut));