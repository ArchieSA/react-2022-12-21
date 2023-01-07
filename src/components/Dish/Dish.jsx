import { Button } from "../Button/Button";
import { useState } from "react";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return (<div>
        <div style={{ display: 'flex', gap: 15 }}>
            {dish.name}
            <div>
                <Button onClick={() => setCount(Math.max(count - 1, 0))}>-</Button>
                {count}
                <Button onClick={() => setCount(Math.min(count + 1, 5))}>+</Button>
            </div>
        </div>
        {count > 0 ?
            (<ul>
                {dish.ingredients?.map((item) => <li><Ingredient ingredient={item} /></li>)}
            </ul>)
            : null
        }
    </div>)
}