import { Button } from '../Button/Button';

export const Tab = ({ restaurant, activeRestaurant, setActiveRestaurant }) => {
  if (!restaurant) {
    return false;
  }

  return (
    <Button
      onClick={() => setActiveRestaurant(restaurant)}
      disabled={restaurant?.id === activeRestaurant?.id}
    >
      {restaurant.name}
    </Button>
  );
};
