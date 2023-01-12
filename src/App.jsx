import { restaurants } from './constants/fixtures';
import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { useState } from 'react';
import { Restaraunts } from './components/Restaraunts/Restaraunts';

export const App = () => {
  const [activeRestaurant, setActiveRestaurant] = useState({});

  return (
    <div>
      <Tabs setActiveRestaurant={setActiveRestaurant} activeRestaurant={activeRestaurant} restaurants={restaurants}></Tabs>
      <Restaraunts activeRestaurant={activeRestaurant} restaurants={restaurants}/>
    </div>
  );
};
