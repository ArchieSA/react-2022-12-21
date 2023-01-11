import { Dish } from '../Dish/Dish';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
