import { IngredientList } from '../IngredientList/IngredientList';
import { Button } from '../Button/Button';

import { useCount } from '../../hooks/useCount';

import {
  MIN_DISH_AMOUNT,
  MAX_DISH_AMOUNT,
} from '../../constants/order-details';

export const Dish = ({ dish }) => {
  const { name, price, ingredients } = dish;

  const { count, decrement, increment } = useCount({ min: MIN_DISH_AMOUNT, max: MAX_DISH_AMOUNT });

  return (
    <div>
      <h4>{name || 'Noname dish'}</h4>

      <p>${price || 'Price is not provided'}</p>

      <Button onClick={decrement} disabled={count === MIN_DISH_AMOUNT}>
        -
      </Button>

      {!!count && <span>{count}</span>}

      <Button onClick={increment} disabled={count === MAX_DISH_AMOUNT}>
        +
      </Button>

      {!!count && ingredients?.length > 0 && (
        <IngredientList ingredients={ingredients} />
      )}
    </div>
  );
};
