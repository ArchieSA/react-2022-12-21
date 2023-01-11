import { Button } from '../Button/Button';

export const Tab = ({ restaurant, activeRestaurant, setActiveRestaurant }) => {
  return (
    <Button
      onClick={() => setActiveRestaurant(restaurant)}
      disabled={activeRestaurant.name === restaurant.name}
    >
      {restaurant.name}
    </Button>
  );
};
