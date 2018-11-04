import React, {Component} from 'react';
import Burger from './../../components/burger/Burger';
import IngredientsList from './../../components/ingredients-list/Ingredients';
import styles from './BurgerBuilder.module.css';

class BurgerBuilder extends Component {
    state= {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 0,
        purchasable: false
    }

    prices =  {
        salad: 2,
        cheese: 4,
        meat: 6,
        bacon: 10
    }
        
    addIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        ingredients[ingredient]++;
        this.setState({ingredients: ingredients});
        this.setState({totalPrice: (this.state.totalPrice + this.prices[ingredient])});
        this.setPurchasable(ingredients);
    }

    removeIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        if(ingredients[ingredient]) {
            ingredients[ingredient]--;
            this.setState({totalPrice: (this.state.totalPrice - this.prices[ingredient])});
        }
        this.setState({ingredients: ingredients});
        this.setPurchasable(ingredients);
    }

    setPurchasable(ingredients) {
        const ingredientsCount = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey]
        }).reduce((totalCount, count) => {
            return totalCount + count;
        }, 0);
        this.setState({purchasable: ingredientsCount > 0});
    }

    render() {
        return (
            <div className = {styles.BurgerBuilder}>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <IngredientsList purchasable = {this.state.purchasable} price= {this.state.totalPrice} addIngredient = {this.addIngredient} removeIngredient = {this.removeIngredient} ingredients = {this.state.ingredients}></IngredientsList>
            </div>
        )
    }
}

export default BurgerBuilder;