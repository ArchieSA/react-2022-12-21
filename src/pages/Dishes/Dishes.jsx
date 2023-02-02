import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectDishIds, selectIsDishLoading, selectDishIdsFilteredByName} from '../../store/modules/dish/selectors.js';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishes';
import { useSearchParams } from 'react-router-dom';
// import { Dish } from '../../components/Dish/Dish';
import { DishesItem } from './DishesItem'

export const Dishes = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsDishLoading);

  const [searchParams, setSearchParams] = useSearchParams();
  const dishesIds = useSelector((state) =>
  selectDishIdsFilteredByName(state, {
    dishName: searchParams.get('dishName') || '',
  }));

  useEffect(() => {
      dispatch(fetchDishes())
  }, []);

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
      Style={'margin-bottom: 20px;'}
      placeholder="Search..."
    />

    {dishesIds.map((id) => <DishesItem key={id} dishId={id} />)}
    
  </>
  
}