import { useState } from 'react';

import { IngredientList } from '../IngredientList/IngredientList';
import { Button } from '../Button/Button';

import {
  MIN_DISH_AMOUNT,
  MAX_DISH_AMOUNT,
} from '../../constants/order-details';

export const Dish = ({ dish }) => {
  const {
    name,
    price,
    ingredients,
  } = dish;

  const [dishAmount, setDishAmount] = useState(0);

  const addDish = () => {
    if (dishAmount === MAX_DISH_AMOUNT) {
      return;
    }
    setDishAmount(dishAmount + 1);
  }

  const removeDish = () => {
    if (dishAmount === MIN_DISH_AMOUNT) {
      return;
    }
    setDishAmount(dishAmount - 1);
  }

  return (
    <div>
      <h4>{name || 'Noname dish'}</h4>

      <p>${price || 'Price is not provided'}</p>


      <Button onClick={removeDish} disabled={dishAmount === 0}>-</Button>
      
      {!!dishAmount && <span>{dishAmount}</span>}

      <Button onClick={addDish} disabled={dishAmount === 5}>+</Button>
      
      { !!dishAmount
        && ingredients?.length > 0
        && <IngredientList ingredients={ingredients}/>
      }
    </div>
  );
}
