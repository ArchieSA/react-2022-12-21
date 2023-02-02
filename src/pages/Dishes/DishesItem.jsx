import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectDishById } from '../../store/modules/dish/selectors';

export const DishesItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  return (
    <div Style={'padding: 5px;'}>
        <NavLink to={`/dish/${dishId}`}>{dish.name}</NavLink>
    </div>
  );
};