import {Ingredient} from "../Ingredient/Ingredient";

export const Ingredients = ({ingredients}) => {
    return <div>
        <h2>Ingredients</h2>
        <ul>
            {
                ingredients.map((item) => <li>
                    <Ingredient ingredient={item}/>
                </li>)
            }
        </ul>
    </div>
}