import * as actionTypes from './actionTypes';
import axios from './../../AxiosOrders';

export const purchaseBurgerSuccess = (id, order) => {
    return {type: actionTypes.PURCHASE_BURGER_SUCCESS, id, order};
}

export const purchaseBurgerFailure = () => {
    return {type: actionTypes.PURCHASE_BURGER_FAILURE};
}

export const purchaseInit = () => {
    return({type: actionTypes.PURCHASE_INIT});
}

export const purchaseBurger = (order) => {
    return (dispatch) => {
        axios.post('/orders.json', order).then((response) => {
            dispatch(purchaseBurgerSuccess(response.data.name, order));
        }).catch(() => {
            dispatch(purchaseBurgerFailure());
        });
    }   
}