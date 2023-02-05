import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';
import { Outlet } from 'react-router-dom';
import { RestaurantTabs } from '../../containers/RestaurantTabs/RestaurantTabs';

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
      <RestaurantTabs />
      {/* {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />} */}
      <Outlet />
    </div>
  );
};
