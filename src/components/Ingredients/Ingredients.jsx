import { Ingredient } from "../Ingredient/Ingredient"

export const Ingredients = ({ingredients}) => {
    return <div>
        <h3>Ingredients:</h3>
        <ul>
          {
            ingredients.map((ingredient) => <li><Ingredient ingredient={ingredient}/></li>)
          }
        </ul>
    </div>
}