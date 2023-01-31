import { Tabs } from '../../components/Tabs/Tabs';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';
import { Outlet } from 'react-router-dom';
import {
  selectRestaurantIdsFilteredByName,
  selectRestaurantById,
} from '../../store/modules/restaurant/selectors';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Tabs
        selectorTabIds={selectRestaurantIdsFilteredByName}
        selectorTabIdsFieldName={'restaurantName'}
        selectorTabId={selectRestaurantById}
        selectorTabIdFieldName={'restaurantId'}
        tabName={'name'}
      />
      <Outlet />
    </div>
  );
};
