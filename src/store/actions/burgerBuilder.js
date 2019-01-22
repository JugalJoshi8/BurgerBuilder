import * as actionTypes from './actionTypes';
import axios from './../../AxiosOrders';

export const addIngredient = (ingredient) => {
    return {type: actionTypes.ADD_INGREDIENT, ingredient};
}

export const removeIngredient = (ingredient) => {
    return {type: actionTypes.REMOVE_INGREDIENT, ingredient};
}

export const setIngredients = (ingredients) => {
    return {type: actionTypes.SET_INGREDIENTS, ingredients};
}

export const fetchIngredientError = () => {
    return {type: actionTypes.FETCH_INGREDIENT_ERROR};
}

export const fetchIngredients = () => {
    return (dispatch) => {
        axios.get('/ingredients.json').then( res => {
            dispatch(setIngredients(res.data))
        }).catch(() => {
            dispatch(fetchIngredientError());
        });
    }
}