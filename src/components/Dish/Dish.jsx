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
            ingredients: {ingredients.join(', ')}
          </p>
        )
      }

      <Button>-</Button>

      <Button>+</Button>
    </div>
  );
}
