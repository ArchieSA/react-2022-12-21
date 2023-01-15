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
    <div className={styles.root}>
      <h4 className={styles.title}>{name}</h4>

      <div className={styles.count_wrapper}>
        <Button onClick={decrement}>-</Button>

        <span className={styles.count}>{count}</span>

        <Button onClick={increment}>+</Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
