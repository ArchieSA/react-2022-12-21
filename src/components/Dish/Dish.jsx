import { Button } from "../Button/Button";

export const Dish = ({ dish }) => {
  const {
    name,
    price,
    ingredients,
  } = dish;

  return (
    <div>
      <h4>{name || 'Noname dish'}</h4>

      <p>${price || 'Price is not provided'}</p>

      {
        ingredients?.length > 0
        && (
          <p>
            ingredients: {ingredients.map((ingredient, index) => `${index > 0 ? ', ' : ''}${ingredient}`)}
          </p>
        )
      }

      <Button>-</Button>

      <Button>+</Button>
    </div>
  );
}
