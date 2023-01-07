import {Ingredient} from "../Ingredient/Ingredient";
import {useState} from "react";

export const Dish = ({id, price, ingredients, name}) => {

    const [chosen, setChosen] = useState(false);

    return(
        <div id={id}>
            <span>price: {price}</span>
            <ul>
                <h4><input type="checkbox" value={chosen} onClick={() => setChosen(!chosen)} /> {name}</h4>
                {chosen && ingredients.map(ingredient => <li key={ingredient}><Ingredient ingredient={ingredient} /></li>)}
            </ul>
        </div>
    )

}