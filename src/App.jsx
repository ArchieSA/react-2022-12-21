import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0] || null)

  return (
    <div>
      <Tabs 
        items={restaurants} 
        onChange={setActiveRestaurant} 
        tabTitle={(item) => item.name} 
        isActive={({ id }) => id === activeRestaurant.id} />
      {activeRestaurant ? <Restaurant restaurant={activeRestaurant} /> : null}
    </div>
  );
};
