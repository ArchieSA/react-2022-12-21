import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DishesItem } from '../../components/DishesItem/DishesItem';
import {
  selectDishIds,
  selectDishIdsByDishName,
  selectIsDishLoading,
} from '../../store/modules/dish/selectors';
import { fetchAllDishes } from '../../store/modules/dish/thunks/fetchAllDishes';

import styles from './styles.module.css';

export const Dishes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allDishIds = useSelector((state) => selectDishIds(state));
  const filteredDishIds = useSelector((state) =>
    selectDishIdsByDishName(state, {
      dishName: searchParams.get('dishName') || '',
    })
  );
  const dishIds = searchParams.get('dishName') ? filteredDishIds : allDishIds;
  const isLoading = useSelector((state) => selectIsDishLoading(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDishes());
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return (
    <div className={styles.root}>
      <input
        value={searchParams.get('dishName') || ''}
        onChange={(event) =>
          setSearchParams({ dishName: event.target.value || '' })
        }
        className={styles.input}
        placeholder="Search..."
      ></input>
      {dishIds.map((dishId) => (
        <DishesItem dishId={dishId} />
      ))}
    </div>
  );
};
