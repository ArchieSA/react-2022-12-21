import { Dish } from '../Dish/Dish';
import { Button } from '../Button/Button';

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
      <Button onClick={() => console.log('click')}>Click Me!</Button>
    </div>
  );
};
