import { Button } from "../Button/Button";
import { useState } from "react";
import { Ingredient } from "../Ingredient/Ingredient";
export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {dish.name}
      {count >= 1 && (
        <ul>
          {dish.ingredients.map((ingredient) => (
            <li>
              <Ingredient ingredient={ingredient} />
            </li>
          ))}
        </ul>
      )}
      <div>
        {count >= 1 && count <= 4 ? (
          <>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </>
        ) : count < 1 ? (
          <>
            <Button onClick={() => setCount(0)}>-</Button>
            {count}
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </>
        ) : count > 4 ? (
          <>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            {count}
            <Button onClick={() => setCount(5)}>+</Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
