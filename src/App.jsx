import React, { useState } from 'react';

import { restaurants } from './constants/fixtures';

import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs';

import styles from './styles.module.css';

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div className={styles.root}>
      <Tabs
        onTabClick={setActiveRestaurantIndex}
        items={restaurants.map(({ name }) => name)}
        activeIndex={activeRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
