import { Ingredient } from '../Ingredient/Ingredient';

export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, i) => (
        <Ingredient key={i} name={ingredient} />
      ))}
    </div>
  );
};
