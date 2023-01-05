import {Button} from "../Button/Button";
import {useState} from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);
    const rangeOfDishes = count >= 0 && count <= 5;

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {rangeOfDishes ? count : 'Only from 0 to 5 dishes are allowed'}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
        {
            count > 0 &&
            <Ingredients ingredients={dish.ingredients}/>
        }
    </div>
}