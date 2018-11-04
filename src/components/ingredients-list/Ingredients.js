import React, { Component } from 'react';
import Ingredient from './ingredient/ingredient';
import classes from './IngredientList.module.css';
import RootDiv from './../hoc/root-div/RootDiv'

class Ingredients extends Component {
    render() {
        const ingredients = Object.keys(this.props.ingredients).map((ingredient) => {
            return (
                <Ingredient value={this.props.ingredients[ingredient]} key={ingredient} type={ingredient} addIngredient={() => { this.props.addIngredient(ingredient) }} removeIngredient={() => { this.props.removeIngredient(ingredient) }}></Ingredient>
            )
        });
        return (
            <RootDiv>
                <div>Total Price: ${this.props.price}</div>
                <div className={classes.IngredientList}>
                    {ingredients}
                </div>
                <button disabled = {!this.props.purchasable}>Order Now</button>
            </RootDiv>
        )
    }
}

export default Ingredients;