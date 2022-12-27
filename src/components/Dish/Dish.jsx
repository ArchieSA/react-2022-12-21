import {Button} from "../Button/Button";
import './Dish.css';

export const Dish = ({ name, price, ingredients }) => {
    return (
        <div className="dish">
            <div>
                <h3>{ name }</h3>
                <em>Ingredients: { ingredients && ingredients.join(', ') }</em>
                <div>{ price } ₽</div>
            </div>
            <div>
                <Button>-</Button>
                <Button>+</Button>
            </div>
        </div>
    );
}
