import {Ingredient} from "../Ingredient/Ingredient";

export const Ingredients = ({ ingredients }) => {  
    return <div>
        <ul>
            {
                ingredients.map((ingredient) => <li><Ingredient ingredient={ingredient} /></li>)
            }
        </ul>
    </div>
}
