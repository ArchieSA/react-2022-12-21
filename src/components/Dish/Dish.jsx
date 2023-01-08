import {Button} from "../Button/Button";
import {Ingredients} from "../Ingredients/Ingredients"
import {useState} from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {count >= 0 && count <= 5 ? count : 'You can only add from 0-5'}
            <Button onClick={() => setCount(count + 1)}>+</Button>
            {
                count > 0 && <Ingredients ingredients={dish.ingredients} />
            }
        </div>
    </div>
}