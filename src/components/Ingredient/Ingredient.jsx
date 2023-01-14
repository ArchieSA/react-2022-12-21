import { Button } from '../Button/Button';
import { useCount } from '../../hooks/useCount';
import styles from './styles.module.css';

const MAX_INGREDIENT_COUNT = 3;

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({
    defaultValue: 1,
    max: MAX_INGREDIENT_COUNT,
  });

  return (
    <div>
      <span className={styles.root}>{name}</span>
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
