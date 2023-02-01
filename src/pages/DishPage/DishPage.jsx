import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { selectDishById } from '../../store/modules/dish/selectors';
import { fetchDishById } from '../../store/modules/dish/thunks/fetchDIshById';
import {
  selectIsRestaurantLoading,
  selectRestaurantsByDishId,
} from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';

import styles from './styles.module.css';

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const restaurants = useSelector((state) =>
    selectRestaurantsByDishId(state, { dishId })
  );
  const isLoading = useSelector((state) => selectIsRestaurantLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishById(dishId));
    dispatch(fetchRestaurants());
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className={styles.root}>
      <div>{dish?.name}</div>
      <div>
        <div>Restaurants with that dish:</div>
        <div>
          {restaurants?.map((restaurant) => (
            <NavLink to={`/restaurants/${restaurant?.id}`}>
              {restaurant?.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
