import { Ingredient } from "../Ingredient/Ingredient"



  export const Ingredients = (item) => {


    return <div>
      <h3>Ingredients</h3>
      <ul>
          {
            item.ingredients.map((ingredient)=><li>
              <Ingredient ingredient={ingredient}/>

            </li>)
          }
      </ul>
    </div>
}
