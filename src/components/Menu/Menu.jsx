import { Dish } from '../Dish/Dish';

import styles from './styles.module.css';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2 className={styles.subtitle}>Menu</h2>

      <ul className={styles.list}>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
