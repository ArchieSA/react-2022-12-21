
import { Ingredient } from "../Ingredient/Ingredient";
export const Ingredients = ({ingredients}) => {
    
    return (
        <div>
            <h5>Ingredients:</h5>
            <ul>
                {
                ingredients.map((ingredient) => <li>
                    <Ingredient ingredient={ingredient}/>
                </li>)
                }
            </ul>
        </div>
        
    );
};
