import {Button} from "../Button/Button";
import {useState} from "react";
import {Ingredient} from "../Ingredient/Ingredient";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => setCount(count => count === 0 ? 0 : count - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount(count => count === 5 ? 5 : count + 1)}>+</Button>
        </div>
        {count > 0 && dish.ingredients?.length > 0 && (<div>
            <div>Ингредиенты</div><ul>
            {dish.ingredients.map((ingredient) => <li>
                <Ingredient ingredient={ingredient}/>
            </li>)}
        </ul>
        </div>)

        }
    </div>
}