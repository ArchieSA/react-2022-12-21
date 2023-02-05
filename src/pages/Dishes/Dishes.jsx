import { useDispatch, useSelector } from 'react-redux';
import {
  selectDishes,
  selectDishesFilteredByName,
  selectIsDishLoading,
} from '../../store/modules/dish/selectors';
import React, { useEffect } from 'react';
import { fetchDishes } from '../../store/modules/dish/thunk/fetchDishes';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import styles from './styles.module.css';

export const DishesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDishLoading);
  const dishes = useSelector((state) =>
    selectDishesFilteredByName(state, {
      dishName: searchParams.get('dishName') || '',
    })
  );

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <input
        value={searchParams.get('dishName') || ''}
        onChange={(event) =>
          setSearchParams({ dishName: event.target.value || '' })
        }
        className={styles.searchInput}
        placeholder="Search..."
      />
      <div>
        <label>Список блюд:</label>
        <div className={styles.root}>
          {dishes.map(({ id, name }) => (
            <NavLink to={`${id}`}>{name}</NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
