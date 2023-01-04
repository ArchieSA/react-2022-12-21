import {Button} from "../Button/Button";
import {useState} from "react";
import {Ingredient} from "../Ingredient/Ingredient";
import {Ingredients} from "../Ingredients/Ingredients";

export const Dish = ({dish}) => {

    const [count, setCount] = useState(0);

    let decrement = function() {

        let counter = count - 1;

        if(counter <= 0) {
            counter = 0;
        }

        setCount(counter);
    }

    let increment = function() {

        let counter = count + 1;

        if(counter >= 5) {
            counter = 5;
        }

        setCount(counter);
    }

    if (!dish) {
        return null;
    }

    let i = 0;

    let dishes = [];

    while(i<count) {
        dishes.push(i);
        i++;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={decrement}>-</Button>
            {count}
            <Button onClick={increment}>+</Button>

            { count > 0 ? <hr /> : null }

            {
                count > 0 ? dishes.map((element) => <div>
                    {dish.name} #{element+1}
                    <Ingredients ingredients={ dish.ingredients } />
                    <hr />
                </div>) : null
            }

        </div>
    </div>
}