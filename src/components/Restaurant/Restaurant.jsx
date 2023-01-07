import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';

export const Restaurant = ({ elRestaurant }) => {
  return (
    <div>
      <h1>{elRestaurant.name}</h1>
      <Menu menu={elRestaurant.menu} />
      <Reviews reviews={elRestaurant.reviews} />
    </div>
  );
};
