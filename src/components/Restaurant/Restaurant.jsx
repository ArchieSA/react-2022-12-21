import React, { useEffect } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantMenuById,
} from '../../store/modules/restaurant/selectors';
import { selectDishIds } from '../../store/modules/dish/selectors';
import { useNavigate, Outlet, useParams } from 'react-router-dom';

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  // const rating = useMemo(
  //   () =>
  //     Math.round(
  //       reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  //     ),
  //   [reviews]
  // );

  const loadedDishIds = useSelector((state) => selectDishIds(state));
  const restaurantDishIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  let showMenu = false;
  if (
    restaurantDishIds.every((restaurantDishId) =>
      loadedDishIds.includes(restaurantDishId)
    )
  ) {
    showMenu = true;
  }

  useEffect(() => {
    if (!showMenu) {
      navigate('menu');
    }
  }, [showMenu]);

  if (!restaurant) {
    return null;
  }

  const fixedTabIds = [
    { tabPath: 'menu', tabName: 'Menu' },
    { tabPath: 'reviews', tabName: 'Reviews' },
  ];

  return (
    <div>
      <div>
        <Tabs fixedTabIds={fixedTabIds} />
      </div>
      <Outlet />
    </div>
  );
};
