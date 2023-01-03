import { useState } from "react"
import { Button } from "../Button/Button"

export const Ingredient = ({title}) => {

    const [ingredientCount, setCount] = useState(1);

    const increaseIngredient = () => {
        if(ingredientCount < 5) {
            setCount(ingredientCount + 1);            
        }
    }

    const decreaseIngredient = () => {
        if ( ingredientCount > 0) {
            setCount( ingredientCount - 1)
        }
    }

    return (
        <div>
            <span>{title}</span>
            <Button onClick={() => decreaseIngredient()}>-</Button>            
                <span>{` :${ingredientCount }`}</span>
            <Button onClick={() => increaseIngredient()}>+</Button>
        </div>
    )
}

