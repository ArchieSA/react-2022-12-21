import { Ingredient } from "../Ingredient/Ingredient"

export const Ingredients = ({ ingredients }) => {
    return (
        <div>
        <h3>Ingredients</h3>
        {
            ingredients.map((ingredient) => <div>
                <Ingredient ingredient={ingredient} />
            </div>)
        }
    </div>)
}