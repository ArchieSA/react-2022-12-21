import { Button } from "../Button/Button";
import { Ingredients } from "../Ingredients/Ingredients";
import { useCount } from "../../hooks/useCount";

const MAX_DISH_COUNT = 6;

export const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount({
    max: MAX_DISH_COUNT,
  });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      {name}
      <div
        style={{
          width: "max-content",

          border: "1px solid red",
        }}
      >
        <Button onClick={decrement} disabled={count === 0}>
          -
        </Button>
        {count}
        <Button onClick={increment} disabled={count === MAX_DISH_COUNT}>
          +
        </Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
