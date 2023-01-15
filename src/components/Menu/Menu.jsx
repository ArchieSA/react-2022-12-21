import { Dish } from '../Dish/Dish';
// import styles from './styles.module.css';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
