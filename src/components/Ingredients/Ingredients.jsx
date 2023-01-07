import { Ingredient } from "../Ingredient/Ingredient"

export const Ingredients = ({ingredients}) => {
  return <ul>
    {
      ingredients.map(item => <li><Ingredient name={item}/></li>)
    }
  </ul>

}