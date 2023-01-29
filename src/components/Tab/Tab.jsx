import { Button, ButtonViewVariant } from '../Button/Button';

import { Size } from '../../constants/ui';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';

export const Tab = ({ restaurantId, onClick, isActive, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

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
