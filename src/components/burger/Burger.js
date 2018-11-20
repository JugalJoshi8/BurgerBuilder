import React from 'react';
import BurgerIngredient from './burger-ingredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
    const ingredientProps = props.ingredients;

    const ingredients = Object.keys(ingredientProps).map((ingredient) => {
        return [...Array(ingredientProps[ingredient])].map((item, index) => {
            return <BurgerIngredient key = {ingredient + index} type = {ingredient} />
        })
    }).reduce((arr, item) => {
        arr.push(...item);
        return arr;
    }, []);

    return (
        <div className = {styles.Burger}>
            <BurgerIngredient type = 'bread-top' />
            {ingredients}
            <BurgerIngredient type = 'bread-bottom' />
        </div>
    )
}

export default burger;