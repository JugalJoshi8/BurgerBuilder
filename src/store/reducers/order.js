import * as actionTypes from './../actions/actionTypes';
const initialState = {
    orders: [],
    error: false,
    purchased: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: 
            return {
                ...state,
                orders: [...state.orders, {...action.order, key: action.id}],
                error: false,
                purchased: true
            };
        case actionTypes.PURCHASE_BURGER_FAILURE:
            return {
                ...state,
                error: true
            };
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                error: false
            };
        case actionTypes.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                error: true
            }
        default: 
            return state;
    } 
}

export default reducer;