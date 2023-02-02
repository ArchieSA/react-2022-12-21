import { Menu } from '../Menu/Menu';
import { Reviews } from '../Reviews/Reviews';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { useParams, Outlet, NavLink, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.module.css';
import { useEffect } from 'react';

export const Restaurant = () => {
  const { restaurantId } = useParams();
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

  
  const navigate = useNavigate()
  useEffect(() => {
    navigate('menu')
  }, [restaurantId])

  if (!restaurant) {
    return null;
  }


  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/*<Rating value={rating} size={Size.l} />
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />*/}

      <div>
        {['menu', 'reviews'].map((Tab) => (
          <NavLink
            to={Tab}
            className={({ isActive }) =>
              classnames(styles.tab, {
                [styles.isActive]: isActive,
              })
            }
          >
            {Tab}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
