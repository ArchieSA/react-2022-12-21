import {Button} from "../Button/Button";
import {Ingredients} from "../Ingredients/Ingredients";
import {useState} from "react";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    const removeDish = () => {
        if(count > 0)
            setCount(count - 1)
    }
    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={removeDish}>
                -
            </Button>
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
        {
            count > 0 && 
            <Ingredients 
                ingredients={dish.ingredients}
            />
        }
    </div>
}