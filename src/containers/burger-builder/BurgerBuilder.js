import React, { Component } from 'react';
import Burger from './../../components/burger/Burger';
import IngredientsList from './../../components/ingredients-list/Ingredients';
import styles from './BurgerBuilder.module.css';
import RootDiv from '../../components/hoc/root-div/RootDiv';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/order-summary/OrderSummary';
import Backdrop from '../../components/ui/backdrop/Backdrop';
import axios from '../../AxiosOrders';
import ServiceHandler from '../../components/hoc/service-handler/ServiceHandler';
import {connect} from 'react-redux'; 
import * as actionTypes from './../../store/actions/actions'



class BurgerBuilder extends Component {
    state = {
        purchasable: false,
        showOrderSummary: false
    }

    componentDidMount() {
        // axios.get('/ingredients.json').then( res => {
        //     this.setState({ingredients: res.data});
        // });
        console.log('props', this.props);
    }

    prices = {
        salad: 2,
        cheese: 4,
        meat: 6,
        bacon: 10
    }

    addIngredient = (ingredient) => {
        this.props.addIngredient(ingredient);
        // const ingredients = { ...this.props.ingredients };
        // ingredients[ingredient]++;
        // this.setState({ ingredients: ingredients });
        // this.setState({ totalPrice: (this.state.totalPrice + this.prices[ingredient]) });
        this.setPurchasable(this.props.ingredients);
    }

    removeIngredient = (ingredient) => {
        this.props.removeIngredient(ingredient);
        // const ingredients = { ...this.props.ingredients };
        // if (ingredients[ingredient]) {
        //     ingredients[ingredient]--;
        //     this.setState({ totalPrice: (this.state.totalPrice - this.prices[ingredient]) });
        // }
        // this.setState({ ingredients: ingredients });
        this.setPurchasable(this.props.ingredients);
    }

    setPurchasable(ingredients) {
        const ingredientsCount = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((totalCount, count) => {
            return totalCount + count;
        }, 0);
        this.setState({ purchasable: ingredientsCount > 0 });
    }

    showOrderSummary = () => {
        this.setState({showOrderSummary: true});
    }

    hideOrderSummary = () => {
        this.setState({showOrderSummary: false});
    }

    checkOut = () => {
        //this.props.history.push('/check-out');
        console.log(this.props);
        let ingredients = [`price=${this.state.totalPrice}`];
        for (let ingredient in this.props.ingredients) {
             ingredients.push(encodeURIComponent(ingredient) + '=' + this.props.ingredients[ingredient])
        }
        this.props.history.push({pathname: 'check-out', search: '?' + ingredients.join('&')});
        this.setState({showOrderSummary: false});
    }

    render() {
        if(!this.props.ingredients) {
            return null;
        }
        return (
            <RootDiv>
                <Backdrop show = {this.state.showOrderSummary} clicked = {this.hideOrderSummary}/>
                <Modal show = {this.state.showOrderSummary}>
                    <OrderSummary price = {this.state.totalPrice} onCancel = {this.hideOrderSummary} onOrder = {this.checkOut} ingredients={this.props.ingredients}></OrderSummary>
                </Modal>
                <div className={styles.BurgerBuilder}>
                    <Burger ingredients={this.props.ingredients}></Burger>
                    <IngredientsList orderClicked = {this.showOrderSummary} purchasable={this.state.purchasable} price={this.state.totalPrice} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} ingredients={this.props.ingredients}></IngredientsList>
                </div>
            </RootDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: ingredient => dispatch({type: actionTypes.ADD_INGREDIENT, ingredient}),
        removeIngredient: ingredient => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredient})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHandler(BurgerBuilder));