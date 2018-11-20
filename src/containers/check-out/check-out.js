import React, { Component } from 'react';
import Burger from './../../components/burger/Burger';

class CheckOut extends Component {
    state = {
        ingredients: {
            cheese: 1,
            salad: 1,
            bacon: 2,
            meat: 1
        }
    }
    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default CheckOut;