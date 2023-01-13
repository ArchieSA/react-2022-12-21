import { Button } from '../Button/Button';

import { useCount } from '../../hooks/useCount';

import {
  MIN_INGREDIENT_AMOUNT,
  MAX_INGREDIENT_AMOUNT,
} from '../../constants/order-details';

export const Ingredient = ({ name }) => {
  const { count, decrement, increment } = useCount({ min: MIN_INGREDIENT_AMOUNT, max: MAX_INGREDIENT_AMOUNT });

  return (
    <div>
      <p>{name}</p>

      <Button onClick={decrement} disabled={count === MIN_INGREDIENT_AMOUNT}>
        -
      </Button>

      <span>{count}</span>

      <Button onClick={increment} disabled={count === MAX_INGREDIENT_AMOUNT}>
        +
      </Button>
    </div>
  );
};
