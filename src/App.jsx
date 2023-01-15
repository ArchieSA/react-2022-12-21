import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './app.css';

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <div className="app">
      <Tabs
        onTabClick={setActiveRestaurantIndex}
        items={restaurants.map(({ name }) => name)}
        activeIndex={activeRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};
