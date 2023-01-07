import {Button} from "../Button/Button";
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
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
    </div>
}