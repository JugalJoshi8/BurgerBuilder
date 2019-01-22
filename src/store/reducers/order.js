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
                orders: [...state.orders, {...action.order, id: action.id}],
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
        default: 
            return state;
    } 
}

export default reducer;