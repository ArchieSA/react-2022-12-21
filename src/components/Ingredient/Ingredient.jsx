import { Button } from '../Button/Button';
import { useCount } from '../../hooks/useCount';

import { MAX_INGREDIENT_AMOUNT } from '../../constants/order-details';

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({
    defaultValue: 1,
    max: MAX_INGREDIENT_AMOUNT,
  });

  return (
    <div>
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
