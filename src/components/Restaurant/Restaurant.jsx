import { Button } from '../Button/Button';
import { Dish } from '../Dish/Dish';
import { Menu } from '../Menu/Menu';
import { Review } from '../Review/Review';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ name, menu, price, ingredients, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <Menu menu={menu} />
        <Dish menu={menu} />
        <Reviews reviews={reviews} />
        <Review reviews={reviews} />
      </div>
    </div>
  );
};
