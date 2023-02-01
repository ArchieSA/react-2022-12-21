import { useDispatch, useSelector } from 'react-redux';
import { selectDishById, selectIsDishLoading } from '../../store/modules/dish/selectors';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchDishById } from '../../store/modules/dish/thunks/fetchDishById';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { selectIsRestaurantLoading, selectRestaurantsByDishId } from '../../store/modules/restaurant/selectors';
import styles from './styles.module.css'

export const DishPage = () => {
  const { dishId } = useParams()
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const isLoading = useSelector(selectIsDishLoading);
  const isRestaurantsLoading = useSelector(selectIsRestaurantLoading);
  const restaurants = useSelector((state) => selectRestaurantsByDishId(state, { dishId }))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishById(dishId))
  }, [dishId])

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [])


  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div >
      <h2 style={{ marginBottom: 0 }}>{dish?.name} <span style={{ opacity: 0.5 }}>{dish?.price} $</span></h2>
      <div style={{ marginBottom: 32, fontSize: 14 }}>
        {dish?.ingredients.map((item) => <span key={item} style={{ opacity: 0.5, marginRight: 10 }}>{item}</span>)}
      </div>

      {isRestaurantsLoading && <span>Restaurants loading...</span>}
      <div>
        {restaurants.map(({ id, name }) => <Link key={id} className={styles.link} to={`/restaurants/${id}`}>{name}</Link>)}
      </div>


    </div>
  );
};
