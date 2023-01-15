import { Ingredient } from '../Ingredient/Ingredient';

export const Ingredients = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={`${ingredient}_${index}`} name={ingredient} />
      ))}
    </div>
  );
};
