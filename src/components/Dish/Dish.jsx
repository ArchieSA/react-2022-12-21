import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Ingredients } from '../Ingredients/Ingredients';
import {
  selectDishById,
  selectIsDishLoading,
} from '../../store/modules/dish/selectors';
import {
  selectIsRestaurantLoading,
  selectRestaurantIdsByDishId,
} from '../../store/modules/restaurant/selectors';
import { fetchRestaurantsIfNotLoaded } from '../../store/modules/restaurant/thunk/fetchRestaurantsIfNotLoaded';
import { fetchDishesIfOneNotLoaded } from '../../store/modules/dish/thunks/fetchDishesIfOneNotLoaded';

export const Dish = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const restaurantsIdsFilteredWithDishId = useSelector((state) => {
    return selectRestaurantIdsByDishId(state, { dishId });
  });
  const isDishLoading = useSelector(selectIsDishLoading);
  const isRestaurantsLoading = useSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurantsIfNotLoaded(restaurantsIdsFilteredWithDishId));
    dispatch(fetchDishesIfOneNotLoaded(dishId));
  }, []);

  if (isDishLoading) {
    return <span>Loading...</span>;
  }

  if (!dish) {
    return null;
  }

  return (
    <div>
      <h2>Dish: {dish.name}</h2>
      <p>Price: {dish.price}</p>
      <Ingredients ingredients={dish.ingredients} />
      {isRestaurantsLoading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <p>This dish is presented in the following restaurants:</p>
          {restaurantsIdsFilteredWithDishId.map(({ id, name }) => (
            <Link key={id} to={`/restaurants/${id}`}>
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
