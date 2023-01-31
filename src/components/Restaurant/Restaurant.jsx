import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { Outlet, useParams } from 'react-router-dom';
import React from 'react';
import styles from './styles.module.css';
import { Tabs } from '../Tabs/Tabs';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

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
