import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ingredient}) => {
    const [count, setCount] = useState(1);

    return <div>
        {ingredient}
        <div>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {count >= 0 && count <= 5 ? count : 'You can only add from 0-5'}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
    </div>
}
