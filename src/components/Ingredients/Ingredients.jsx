import { Ingredient } from '../Ingredient/Ingredient';

import styles from './styles.module.css';

export const Ingredients = ({ ingredients }) => {
  return (
    <div className={styles.root}>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={`${ingredient}_${index}`} name={ingredient} />
      ))}
    </div>
  );
};
