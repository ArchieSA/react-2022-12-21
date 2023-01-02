import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ingredient}) => {
    const [count, setCount] = useState(1);

    const updateCount = function(newCount) {
        if (newCount < 1 ) newCount = 1;
        if (newCount > 5 ) newCount = 5;
        setCount(newCount);
    } 

    if (!ingredient) {
        return null;
    }

    return <div>
        {ingredient}
        <div>
            <Button onClick={() => updateCount(count - 1)}>-</Button>
            {count}
            <Button onClick={() => updateCount(count + 1)}>+</Button>
        </div>
    </div>
}