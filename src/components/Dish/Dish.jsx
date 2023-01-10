import {Button} from "../Button/Button";
import {useState} from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return (
        <div>
            {dish.name}
            <div>
                <Button onClick={() => setCount(count - 1)} disabled={count === 0}>-</Button>
                {count}
                <Button onClick={() => setCount(count + 1)} disabled={count === 5}>+</Button>
            </div>
            {
                count > 0 && dish.ingredients?.length && <Ingredients ingredients={dish.ingredients}/>
            }
        </div>
    )
}