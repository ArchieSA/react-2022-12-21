import { Button } from '../Button/Button';
import { Ingredients } from '../Ingredients/Ingredients';
import { useCount } from '../../hooks/useCount';
import classnames from 'classnames';

import styles from './styles.module.css';

const MAX_DISH_COUNT = 6;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount({
    max: MAX_DISH_COUNT,
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
      <div className={styles.dish}>
        {name}
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
        </div>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
