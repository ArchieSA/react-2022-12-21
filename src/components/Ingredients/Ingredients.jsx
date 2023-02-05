import {Ingredient} from "../Ingredient/Ingredient";

export const Ingredients = ({ingredients}) => {
    return <div>
        {ingredients.map((ingredient) => <Ingredient name={ingredient}/>)}
    </div>
}
