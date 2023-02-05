import { useDispatch, useSelector } from 'react-redux';
import {
  selectDishes,
  selectIsDishLoading,
} from '../../store/modules/dish/selectors';
import React, { useEffect } from 'react';
import { fetchDishes } from '../../store/modules/dish/thunk/fetchDishes';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './styles.module.css';

export const DishesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDishLoading);
  const dishes = useSelector((state) => selectDishes(state));

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Outlet />
      <div className={styles.root}>
        {dishes.map(({ id, name }) => (
          <NavLink to={`${id}`}>{name}</NavLink>
        ))}
      </div>
    </div>
  );
};
