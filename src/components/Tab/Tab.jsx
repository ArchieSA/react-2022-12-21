import { Button, ButtonViewVariant } from '../Button/Button';

import { Size } from '../../constants/ui';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';

export const Tab = ({ restaurantId, onClick, isActive, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      size={Size.l}
      viewVariant={
        isActive ? ButtonViewVariant.prime : ButtonViewVariant.second
      }
      className={className}
    >
      {restaurant.name}
    </Button>
  );
};
