import React, { Component } from 'react';
import Ingredient from './ingredient/ingredient';
import classes from './IngredientList.module.css';

class Ingredients extends Component {
    render() {
        const ingredients = Object.keys(this.props.ingredients).map((ingredient) => {
            return (
                <Ingredient value={this.props.ingredients[ingredient]} key={ingredient} type={ingredient} addIngredient={() => { this.props.addIngredient(ingredient) }} removeIngredient={() => { this.props.removeIngredient(ingredient) }}></Ingredient>
            )
        });
        return (
            <div className={classes.IngredientList}>
                <div>Total Price: ${this.props.price}</div>
                <div>
                    {ingredients}
                </div>
                <button onClick = {this.props.orderClicked} disabled = {!this.props.purchasable}>Order Now</button>
            </div>
        )
    }
}

export default Ingredients;