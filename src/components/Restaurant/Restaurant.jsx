import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantMenuById,
} from '../../store/modules/restaurant/selectors';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Tabs } from '../Tabs/Tabs';
import { selectDishIds } from '../../store/modules/dish/selectors';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  const loadedDishIds = useSelector((state) => selectDishIds(state));
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  let needShowMenu = false;
  if (
    restaurantDishIds.every((restaurantDishId) =>
      loadedDishIds.includes(restaurantDishId)
    )
  ) {
    needShowMenu = true;
  }

  useEffect(() => {
    if (!needShowMenu) {
      navigate('menu');
    }
  }, [needShowMenu]);

  if (!restaurant) {
    return null;
  }

  const fixedTabIds = [];
  fixedTabIds.push({ tabPath: 'menu', tabName: 'Menu' });
  fixedTabIds.push({ tabPath: 'reviews', tabName: 'Reviews' });

  return (
    <div>
      <div className={styles.root}>
        <Tabs fixedTabIds={fixedTabIds} />
      </div>
      <Outlet />
    </div>
  );
};
