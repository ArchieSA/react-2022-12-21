import { Dish } from '../Dish/Dish';
import { useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../store/modules/restaurant/selectors';

export const Menu = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dishIds.map((id) => (
          <li key={id}>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
