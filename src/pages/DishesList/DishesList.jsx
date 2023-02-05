import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import {
  selectDishEntities,
  selectDishFilteredByName,
  selectIsAllDishLoading,
} from '../../store/modules/dish/selectors';
import { fetchDishes } from '../../store/modules/dish/thunks/fetchDishByRestaurantId';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { useSearchParams } from 'react-router-dom';
export const DishesListPage = () => {
  const dispatch = useDispatch();
  const isAllDishLoaded = useSelector(selectIsAllDishLoading);
  const dishes = useSelector(selectDishEntities);
  const [searchParams, setSearchParams] = useSearchParams();

  const filtredDish = useSelector((state) =>
    selectDishFilteredByName(state, {
      dishName: searchParams.get('dishName') || '',
    })
  );

  console.log('filtredDish', filtredDish);
  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchRestaurants());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('dishes', dishes);
  if (!isAllDishLoaded) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <input
        value={searchParams.get('dishName') || ''}
        onChange={(event) =>
          setSearchParams({ dishName: event.target.value || '' })
        }
        placeholder="Search..."
      />
      <ul>
        {filtredDish.map(({ id: dishId, name }) => (
          <li key={dishId}>{<NavLink to={dishId}>{name}</NavLink>}</li>
        ))}
      </ul>
      ;
      <Outlet />
    </div>
  );
};
