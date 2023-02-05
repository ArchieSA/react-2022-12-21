import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs'
import React, { useState } from 'react';

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0])

  return (
    <div>
      <Tabs restaurants={restaurants} activeRestaurant={activeRestaurant} setActiveRestaurant={setActiveRestaurant}/>
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
