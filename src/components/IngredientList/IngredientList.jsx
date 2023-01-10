import { Ingredient } from '../Ingredient/Ingredient';

export const IngredientList = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={`${ingredient}_${index}`}>
          <Ingredient name={ingredient} />
        </li>
      ))}
    </ul>
  );
};
