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
        }
    }
        
    addIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        ingredients[ingredient]++;
        this.setState({ingredients: ingredients});
    }

    removeIngredient = (ingredient) => {
        const ingredients = {...this.state.ingredients};
        if(ingredients[ingredient]) {
            ingredients[ingredient]--;
        }
        this.setState({ingredients: ingredients});
    }

    render() {
        return (
            <div className = {styles.BurgerBuilder}>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <IngredientsList addIngredient = {this.addIngredient} removeIngredient = {this.removeIngredient} ingredients = {this.state.ingredients}></IngredientsList>
            </div>
        )
    }
}

export default BurgerBuilder;