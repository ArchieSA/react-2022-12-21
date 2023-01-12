import { Restaurant } from "../Restaurant/Restaurant";

export const Restaraunts = ({ restaurants, activeRestaurant }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant
          activeRestaurant={activeRestaurant}
          restaurant={restaurant}
        ></Restaurant>
      ))}
    </div>
  );
};
