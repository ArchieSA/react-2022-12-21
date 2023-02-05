import { Dish } from '../Dish/Dish';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantMenuById,
  selectRestaurantMenuByIdSortedByDishName,
} from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsDishLoading } from '../../store/modules/dish/selectors';
import { fetchDishesByRestaurantId } from '../../store/modules/dish/thunk/fetchDishesByRestaurantId';
import { Button } from '../Button/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAlternativeSort } from './utils';
import { sortDirections } from '../../constants/sortDirections';

const sortSearchParamName = 'sort';
const defaultSort = { [sortSearchParamName]: sortDirections.asc };

export const Menu = () => {
  const { restaurantId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(defaultSort);
  const dispatch = useDispatch();
  const currentSort = searchParams.get(sortSearchParamName);

  const dishIds = useSelector((state) =>
    selectRestaurantMenuByIdSortedByDishName(state, {
      restaurantId,
      sortDirection: currentSort,
    })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishesByRestaurantId(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h2>Menu</h2>
      <Button
        onClick={() =>
          setSearchParams({
            sort: getAlternativeSort(currentSort),
          })
        }
      >
        Toggle sort (current: {currentSort})
      </Button>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
