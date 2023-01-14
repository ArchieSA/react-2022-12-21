import { Button } from '../Button/Button';

export const Tab = ({ onTabClick, restaurant, isActive }) => {
  return (
    <Button
      {...restaurant}
      onClick={() => onTabClick(restaurant['id'])}
      disabled={isActive}
    >
      {restaurant.name}
    </Button>
  );
};
