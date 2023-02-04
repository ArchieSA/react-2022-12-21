import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import {
  selectDishesFilteredByName,
  selectIsDishLoading,
} from '../../store/modules/dish/selectors';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishes';
import styles from './styles.module.css';

export const Dishes = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const dishes = useSelector((state) =>
    selectDishesFilteredByName(state, {
      dishName: searchParams.get('dishName') || '',
    })
  );
  const isLoading = useSelector(selectIsDishLoading);
  useEffect(() => {
    dispatch(fetchDishes());
  }, []);
  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <h3>Dishes</h3>
      <input
        type="text"
        onChange={(e) => {
          setSearchParams({ dishName: e.target.value || '' });
        }}
      />
      {dishes.map(({ id, name }) => (
        <Link key={id} to={`${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};
