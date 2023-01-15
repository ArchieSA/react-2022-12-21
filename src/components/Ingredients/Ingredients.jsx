import { Ingredient } from '../Ingredient/Ingredient';
import styles from './styles.module.css';

export const Ingredients = ({ ingredients }) => {
  return (
    <div className={styles.root}>
      <p>Ingredients:</p>
      <div className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <Ingredient className={'ingredient'} name={ingredient} />
        ))}
      </div>
    </div>
  );
};
