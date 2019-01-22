
import * as actionTypes from './../actions/actionTypes';
const basePrice = 4;

const initialState = {
    price: basePrice,
    isPurchasable: false,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 2,
    cheese: 4,
    meat: 6,
    bacon: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: ++state.ingredients[action.ingredient]
                },
                price: state.price + INGREDIENT_PRICES[action.ingredient],
                isPurchasable: true
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: --state.ingredients[action.ingredient]
                },
                price: state.price - INGREDIENT_PRICES[action.ingredient],
                isPurchasable: (state.price - INGREDIENT_PRICES[action.ingredient]) > basePrice
            };
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                    bacon: action.ingredients.bacon,
                },
                price: 4,
                error: false
            }
        case actionTypes.FETCH_INGREDIENT_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;

    }
}

export default reducer;

