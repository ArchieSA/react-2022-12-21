import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import { Tabs } from './components/Tabs/Tabs';
import React from 'react';
import { useState, useCallback } from 'react';

export const App = () => {

  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const updateData = (id) => {
    restaurants.map((restaurant) => {
      if (restaurant.id === id) setActiveRestaurant(restaurant) 
    })
  }
 
 /*
  const updateData = useCallback(
    (id) => {
      restaurants.map((restaurant) => {
        if (restaurant.id === id) setActiveRestaurant(restaurant) 
      })
    },
    [activeRestaurant]
  );
 */

  return (
    <div>
      <Tabs RestaurantsObj={restaurants} updateData={updateData} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
