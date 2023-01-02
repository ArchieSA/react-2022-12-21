import {Button} from "../Button/Button";
import {Ingredients} from "../Ingredients/Ingredients";
import {useState} from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    const updateCount = function(newCount) {
        if (newCount < 0 ) newCount = 0;
        if (newCount > 5 ) newCount = 5;
        setCount(newCount);
    } 

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => updateCount(count - 1)}>-</Button>
            {count}
            <Button onClick={() => updateCount(count + 1)}>+</Button>
        </div>
        {(count <= 1) ? null : <Ingredients ingredients={dish?.ingredients}></Ingredients> }
        
    </div>
}