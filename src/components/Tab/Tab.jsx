export const Tab = ({ restaurant, setRestaurantName, restaurantName }) => {
  return (
    <button
      onClick={() => setRestaurantName(restaurant.name)}
      disabled={restaurantName === restaurant.name}
    >
      {restaurant.name}
    </button>
  );
};
