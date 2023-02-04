import { Ingredient } from '../Ingredient/Ingredient';

export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient} name={ingredient} />
      ))}
    </div>
  );
};
