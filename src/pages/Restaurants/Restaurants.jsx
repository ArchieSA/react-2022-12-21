import { Tabs } from '../../components/Tabs/Tabs';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsRestaurantLoading,
  selectRestaurantById,
  selectRestaurantIdsFilteredByName,
} from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';
import { Outlet } from 'react-router-dom';

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
        tabName={'name'}
        selectorTabIds={selectRestaurantIdsFilteredByName}
        selectorTabIdsFieldName={'restaurantName'}
        selectorTabId={selectRestaurantById}
        selectorTabIdFieldName={'restaurantId'}
      />
      <Outlet />
    </div>
  );
};
