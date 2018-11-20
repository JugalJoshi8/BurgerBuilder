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



class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 0,
        purchasable: false,
        showOrderSummary: false
    }

    componentDidMount() {
        axios.get('/ingredients.json').then( res => {
            this.setState({ingredients: res.data});
        });
    }

    prices = {
        salad: 2,
        cheese: 4,
        meat: 6,
        bacon: 10
    }

    addIngredient = (ingredient) => {
        const ingredients = { ...this.state.ingredients };
        ingredients[ingredient]++;
        this.setState({ ingredients: ingredients });
        this.setState({ totalPrice: (this.state.totalPrice + this.prices[ingredient]) });
        this.setPurchasable(ingredients);
    }

    removeIngredient = (ingredient) => {
        const ingredients = { ...this.state.ingredients };
        if (ingredients[ingredient]) {
            ingredients[ingredient]--;
            this.setState({ totalPrice: (this.state.totalPrice - this.prices[ingredient]) });
        }
        this.setState({ ingredients: ingredients });
        this.setPurchasable(ingredients);
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
        let ingredients = [];
        for (let ingredient in this.state.ingredients) {
             ingredients.push(encodeURIComponent(ingredient) + '=' + this.state.ingredients[ingredient])
        }
        this.props.history.push({pathname: 'check-out', search: '?' + ingredients.join('&')});
        //this.setState({showOrderSummary: false});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice
        // };
        // axios.put('/orders.json', order).then((response) => {
        //     console.log(response);
        // })
    }

    render() {
        if(!this.state.ingredients) {
            return null;
        }
        return (
            <RootDiv>
                <Backdrop show = {this.state.showOrderSummary} clicked = {this.hideOrderSummary}/>
                <Modal show = {this.state.showOrderSummary}>
                    <OrderSummary price = {this.state.totalPrice} onCancel = {this.hideOrderSummary} onOrder = {this.checkOut} ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <div className={styles.BurgerBuilder}>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <IngredientsList orderClicked = {this.showOrderSummary} purchasable={this.state.purchasable} price={this.state.totalPrice} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} ingredients={this.state.ingredients}></IngredientsList>
                </div>
            </RootDiv>
        )
    }
}

export default ServiceHandler(BurgerBuilder);