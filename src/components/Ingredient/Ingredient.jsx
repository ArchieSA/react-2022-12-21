import { Button } from '../Button/Button';
import { useCount } from '../../hooks/useCount';

import styles from './styles.module.css';

import { MAX_INGREDIENT_AMOUNT } from '../../constants/order-details';

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({
    defaultValue: 1,
    max: MAX_INGREDIENT_AMOUNT,
  });

  return (
    <div className={styles.root}>
      <p className={styles.text}>{name}</p>
    
      <div className={styles.count_wrapper}>
        <Button onClick={decrement}>-</Button>

        <span className={styles.count}>{count}</span>

        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
