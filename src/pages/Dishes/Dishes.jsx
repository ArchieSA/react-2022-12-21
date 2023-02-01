import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishes';
import { selectDishIds, selectDishIdsFilteredByName, selectIsDishLoading } from '../../store/modules/dish/selectors';
import { Dish } from '../../components/Dish/Dish';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.css'

export const Dishes = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsDishLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const dishesIds = useSelector((state) =>
    selectDishIdsFilteredByName(state, {
      dishName: searchParams.get('dishName') || '',
    })
  );

  useEffect(() => {
    dispatch(fetchDishes())
  }, [])

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <>
    <h2>Dishes</h2>
    
    <input
      value={searchParams.get('dishName') || ''}
      onChange={(event) =>
        setSearchParams({ dishName: event.target.value || '' })
      }
      className={styles.searchInput}
      placeholder="Search..."
    />

    {dishesIds.map((id) => <Dish key={id} dishId={id} />)}
  </>
};
