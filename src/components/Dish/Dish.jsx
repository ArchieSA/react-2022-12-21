import {Button} from "../Button/Button";
import {useState} from "react";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);

    if (!dish) {
        return null;
    }

    const increaseIngredient = () => {
        setCount(count + 1)
    }

    const decreaseIngredient = () => {
        if(count > 0){
        setCount(count - 1)            
        }
    } 

    const drowIngredients = () => {
        if(count > 1) {
            return(
                <ol>
                    {dish.ingredients.map(ingredient => <li><Ingredient title={ingredient}/></li>)}
                </ol>       
            )       
        }
    } 

    return <div>
        {dish.name}
        <div>
            <Button onClick={() => decreaseIngredient()}>-</Button>
            {count}
            <Button onClick={() => increaseIngredient()}>+</Button>
        </div>        
        {drowIngredients()}
    </div>
}