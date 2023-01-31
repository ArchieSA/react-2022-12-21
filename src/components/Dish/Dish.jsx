import { Button } from '../Button/Button';
import classnames from 'classnames';

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishCountByName } from '../../store/modules/cart/selectors';
import { selectDishById } from '../../store/modules/dish/selectors';
import { cartSlice } from '../../store/modules/cart';

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) =>
    selectDishCountByName(state, { dishId })
  );
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrement = () => dispatch(cartSlice.actions.remove(dishId));
  const increment = () => dispatch(cartSlice.actions.add(dishId));

  const { name } = dish;

  return (
    <div
      className={classnames(styles.root, {
        [styles.rootBig]: count > 4,
      })}
    >
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
