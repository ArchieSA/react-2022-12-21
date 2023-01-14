import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs';
import React from 'react';
import { useState } from 'react';

export const App = () => {
  const [active, setActive] = useState( 0 );
  const tabNames = restaurants.map((restaurant) => {
    return restaurant.name;
  })

  const activeRestaurant = restaurants[active];
  return (
    <div>
      <Tabs tabNames={tabNames} active={active} setActive={setActive} />
      {<Restaurant restaurant={activeRestaurant}/>}
    </div>
  );
};
