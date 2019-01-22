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

export const fetchOrdersSuccess = (orders) => {
    return {type: actionTypes.FETCH_ORDERS_SUCCESS, orders};
}

export const fetchOrdersFailure = () => {
    return {type: actionTypes.FETCH_ORDERS_FAILURE};
}

export const fetchOrders = () => {
    return (dispatch) => {
        axios.get('orders.json').then((response) => {
            const orders = [];
            for(let key in response.data) {
                orders.push({...response.data[key], key: key});
            }
            dispatch(fetchOrdersSuccess(orders));
        }).catch(() => {
            dispatch(fetchOrdersFailure());
        })
    }
}