// import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
// import { Dish } from '../Dish/Dish';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <h2>Menu</h2>
        <ul>
          {/* {
                        menu.map(({name}) => <li>
                            {name}
                            <Button>-</Button>
                            <Button>+</Button>
                        </li>)
                    } */}
          <Menu items={menu}></Menu>
        </ul>
      </div>
      <div>
        <h2>Reviews</h2>
        <ul>
          <Reviews items={reviews}></Reviews>
        </ul>
      </div>
    </div>
  );
};
