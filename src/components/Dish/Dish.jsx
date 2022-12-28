import {Button} from "../Button/Button";
import './Dish.css';

export const Dish = ({ name, price, ingredients }) => {

    if(!name && !price) {
        return false;
    }

    return (
        <div className="dish">
            <div>
                <h3>{ name }</h3>
                <em>{ ingredients ? ingredients.join(', ') : 'Unknown ingredients' }</em>
                <div>{ price } $</div>
            </div>
            <div>
                <Button>-</Button>
                <Button>+</Button>
            </div>
        </div>
    );
}
