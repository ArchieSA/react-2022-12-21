import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { RestaurantsPage } from './pages/Restaurants/Restaurants';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import { Restaurant } from './components/Restaurant/Restaurant';

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<RestaurantsPage />}>
              <Route index element={<span>choose restaurant</span>} />
              <Route path=":restaurantId" element={<Restaurant />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route
              path="closed-page"
              element={<Navigate to="/restaurants" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};
