import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { selectDishById } from '../../store/modules/dish/selectors';
import { restaurantListContainsCurrentDish } from '../../store/modules/restaurant/selectors';

export const DishPage = () => {
  const { dishId } = useParams();
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, { dishId })
  );
  const restaurantList = useSelector((state) =>
    restaurantListContainsCurrentDish(state, { dishId })
  );

  return (
    <div>
      <h1>{name}</h1>
      <h3>{`price:${price}`}</h3>
      <h3>ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>{`list of restaurants where you can try ${name}`}</h3>
      <ul>
        {restaurantList.map(({ name: restaurantName, id }) => (
          <li key={id}>
            {<NavLink to={`/restaurants/${id}`}>{restaurantName}</NavLink>}
          </li>
        ))}
      </ul>
    </div>
  );
};
