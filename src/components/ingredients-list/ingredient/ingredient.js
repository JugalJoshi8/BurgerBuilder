import React , {Component} from 'react';
import classes from './Ingredient.module.css';
class Ingredient extends Component {
    render() {
        return (
            <div className = {classes.Ingredient}>
                <div>{this.props.type.toUpperCase()}({this.props.value})</div>
                <button className = {classes.LessButton} onClick = {this.props.removeIngredient}>Less</button>
                <button className = {classes.MoreButton} onClick = {this.props.addIngredient}>More</button>
            </div>
        )
    }
}

export default Ingredient;