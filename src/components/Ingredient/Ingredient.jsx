import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ingredient}) => {
    const [count, setCount] = useState(1);

    if (!ingredient) {
        return null;
    }

    return <div>
        {ingredient}
        <div>
            <Button onClick={() => setCount(count => count === 0 ? 0 : count - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount(count => count === 5 ? 5 : count + 1)}>+</Button>
        </div>
    </div>
}