import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { store } from './store';
import { Cart } from './components/Cart/Cart';
import { Provider } from 'react-redux';
import { Restaurant } from './components/Restaurant/Restaurant';

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <Provider store={store}>
      <div>
        <Tabs
          onTabClick={setActiveRestaurantId}
          activeId={activeRestaurantId}
        />
        {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        <Cart />
      </div>
    </Provider>
  );
};
