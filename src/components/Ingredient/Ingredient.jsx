import {useState} from "react";
import {Button} from "../Button/Button";

export const Ingredient = ({ingredient}) => {

    const [count, setCount] = useState(1);

    let decrement = function() {

        let counter = count - 1;

        if(counter < 0) {
            counter = 0;
        }

        setCount(counter);
    }

    let increment = function() {

        let counter = count + 1;

        if(counter > 5) {
            counter = 5;
        }

        setCount(counter);
    }

    if(!ingredient) {
        return null;
    }

    return <div>
        {ingredient}
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
    </div>
}