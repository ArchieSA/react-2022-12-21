import React, { useState } from 'react';
import { Button } from '../Button/Button';

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {/* Извлекаем из свойства ingredients значения и сохраняем их в item */}

        {ingredient.ingredients.map((item) => (
          <li>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
