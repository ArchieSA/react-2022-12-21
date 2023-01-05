import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({ ingredient }) => {
    const [count, setCount] = useState(1);
    const rangeOfIngredients = count >= 0 && count <= 5;

    return (
        <div>
            {ingredient}
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {rangeOfIngredients ? count : 'Only from 0 to 5 ingredients are allowed'}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
)}