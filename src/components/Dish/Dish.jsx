import classnames from 'classnames';

import { useCount } from '../../hooks/useCount';

import { Button } from '../Button/Button';
import { Ingredients } from '../Ingredients/Ingredients';

import { MAX_DISH_AMOUNT } from '../../constants/order-details';

import styles from './styles.module.css';

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount({
    max: MAX_DISH_AMOUNT,
  });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div
      className={classnames(styles.root, {
        [styles.rootBig]: count > 4,
      })}
    >
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
