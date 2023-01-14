import { Button } from '../Button/Button';
import { Ingredients } from '../Ingredients/Ingredients';
import { useCount } from '../../hooks/useCount';

const MAX_DISH_COUNT = 6;

export const Dish = ({ dish }) => {
  const { name, ingredients } = dish;

  const { count, increment, decrement } = useCount({
    max: MAX_DISH_COUNT
  });

  if (!dish) {
    return null;
  }

  return (
    <div>
      {name}
      <div>
        <Button onClick={()=> decrement(name)}>-</Button>
        {count}
        <Button onClick={()=> increment(name)}>+</Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
