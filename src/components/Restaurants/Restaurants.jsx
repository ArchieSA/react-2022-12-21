import { Restaurant } from '../Restaurant/Restaurant';

export const Restaurants = ({ restaurants, activeRestaurant }) => {
  const isVisible = (restaurantName) => {
    return restaurantName?.name === activeRestaurant?.name ? 'block' : 'none';
  };
  return (
    <div>
      {restaurants.map((item) => (
        <Restaurant restaurant={item} style={{ display: isVisible(item) }} />
      ))}
    </div>
  );
};
