import {Button} from "../Button/Button";
import {useState} from "react";
import { Ingredients } from "../Ingredients/Ingredients";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => {
                if (count>0)
                    setCount(count-1)
                }}
            >-</Button>
            {count}
            <Button onClick={() => {
                if (count<5)
                    setCount(count+1)
                }}
            >+</Button>
            
            {count>0 && <Ingredients ingredients={dish.ingredients}/>}
        </div>
    </div>
}