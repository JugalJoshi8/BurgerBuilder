import React, { Component } from 'react';
import Burger from './../../components/burger/Burger';
import IngredientsList from './../../components/ingredients-list/Ingredients';
import styles from './BurgerBuilder.module.css';
import RootDiv from '../../components/hoc/root-div/RootDiv';
import Modal from '../../components/ui/Modal/Modal';
import OrderSummary from '../../components/order-summary/OrderSummary';
import Backdrop from '../../components/ui/backdrop/Backdrop';
import ServiceHandler from '../../components/hoc/service-handler/ServiceHandler';
import {connect} from 'react-redux'; 
import * as actions from './../../store/actions';



class BurgerBuilder extends Component {
    state = {
        showOrderSummary: false
    }

    componentDidMount() {
        this.props.fetchIngredients();        
    }


    addIngredient = (ingredient) => {
        this.props.addIngredient(ingredient);

    }

    removeIngredient = (ingredient) => {
        this.props.removeIngredient(ingredient);
    }

    showOrderSummary = () => {
        this.setState({showOrderSummary: true});
    }

    hideOrderSummary = () => {
        this.setState({showOrderSummary: false});
    }

    checkOut = () => {
        let ingredients = [`price=${this.state.totalPrice}`];
        for (let ingredient in this.props.ingredients) {
             ingredients.push(encodeURIComponent(ingredient) + '=' + this.props.ingredients[ingredient])
        }
        //this.props.history.push({pathname: 'check-out', search: '?' + ingredients.join('&')});
        this.props.history.push({pathname: 'check-out'});
        this.setState({showOrderSummary: false});
        this.props.purchaseInit();
    }

    render() {
        if(!this.props.ingredients) {
            return null;
        }
        return (
            <RootDiv>
                <Backdrop show = {this.state.showOrderSummary} clicked = {this.hideOrderSummary}/>
                <Modal show = {this.state.showOrderSummary}>
                    <OrderSummary price = {this.props.totalPrice} onCancel = {this.hideOrderSummary} onOrder = {this.checkOut} ingredients={this.props.ingredients}></OrderSummary>
                </Modal>
                <div className={styles.BurgerBuilder}>
                    <Burger ingredients={this.props.ingredients}></Burger>
                    <IngredientsList orderClicked = {this.showOrderSummary} purchasable={this.props.isPurchasable} price={this.props.totalPrice} addIngredient={this.addIngredient} removeIngredient={this.removeIngredient} ingredients={this.props.ingredients}></IngredientsList>
                </div>
            </RootDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.price,
        isPurchasable: state.burgerBuilder.isPurchasable,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: ingredient => dispatch(actions.addIngredient(ingredient)),
        removeIngredient: ingredient => dispatch(actions.removeIngredient(ingredient)),
        fetchIngredients: () => dispatch(actions.fetchIngredients()),
        purchaseInit: ()=> dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceHandler(BurgerBuilder));