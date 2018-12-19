
import * as actionTypes from './../actions/actions';
const basePrice = 4;

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0
    },
    price: basePrice,
    isPurchasable: false
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
        default:
            return state;

    }
}

export default reducer;

