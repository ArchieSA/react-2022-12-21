import { Button } from '../Button/Button';
import { useCount } from '../../hooks/useCount';
import styles from '../Ingredients/styles.module.css';

const MAX_INGREDIENT_COUNT = 3;

export const Ingredient = ({ name, className }) => {
  const { count, increment, decrement } = useCount({
    defaultValue: 1,
    max: MAX_INGREDIENT_COUNT,
  });

  return (
    <div className={styles[className]}>
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
