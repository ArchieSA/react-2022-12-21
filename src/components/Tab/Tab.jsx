import { Button } from '../Button/Button';
export const Tab = ({ restaurant, active, setActiveRestaurant }) => {
  return (
    <Button onClick={() => setActiveRestaurant(restaurant)} disabled={active}>
      {restaurant.name}
    </Button>
  );
};
