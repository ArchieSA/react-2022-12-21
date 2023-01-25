import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { RestaurantsPage } from './pages/Restaurants/Restaurants';

export const App = () => {
  return (
    <Provider store={store}>
      <RestaurantsPage />
    </Provider>
  );
};
