import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://burger-builder-66582.firebaseio.com/'
});

export default axiosOrders;