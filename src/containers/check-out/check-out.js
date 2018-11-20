import React, { Component } from 'react';
import Burger from './../../components/burger/Burger';

class CheckOut extends Component {
    state = {
        ingredients: null
    }

    componentWillMount() {
        let ingredients = {};
        const searchQuery = new URLSearchParams(this.props.location.search).entries();
        for(let query of searchQuery) {
            ingredients[query[0]] = +query[1]; 
        }
        this.setState({ingredients: ingredients});
    }

    render() {
        if(!this.state.ingredients) {
            return null;
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default CheckOut;