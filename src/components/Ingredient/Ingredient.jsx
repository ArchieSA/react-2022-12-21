import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ ingredient }) => {
    const [count, setCount] = useState(1);

    return (
        <div>
            {ingredient}
            <Button onClick={() => setCount(count - 1)} disabled={count === 0}>-</Button>
            {count}
            <Button onClick={() => setCount(count + 1)} disabled={count === 5}>+</Button>
        </div>
)}