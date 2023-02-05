import { NavLink, useParams } from 'react-router-dom';
import { Dish } from '../../components/Dish/Dish';
import { selectRestaurantEntitiesFilteredByDishId } from '../../store/modules/restaurant/selectors';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import React, { useEffect } from 'react';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';

export const DishPage = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();
  const restaurantEntitiesFilteredByDishId = useSelector((state) =>
    selectRestaurantEntitiesFilteredByDishId(state, { dishId })
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);

  return (
    <div>
      <div className={styles.dish}>
        <label>Информация о выбранном блюде:</label>
        <Dish dishId={dishId} />
      </div>
      <div>
        <label>Список ресторанов для выбранного блюда:</label>
        <div className={styles.restaurants}>
          {restaurantEntitiesFilteredByDishId.map(({ id, name }) => (
            <NavLink to={`/restaurants/${id}`}>{name}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
