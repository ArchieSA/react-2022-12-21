import { Dish } from '../Dish/Dish';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>

      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem['id']}>
            <Dish dish={menuItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
