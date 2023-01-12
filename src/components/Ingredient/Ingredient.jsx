import { Button } from "../Button/Button";
import { useCount } from "../../hooks/useCount";

const MAX_INGREDIENT_COUNT = 3;

export const Ingredient = ({ name }) => {
  const { count, increment, decrement } = useCount({
    defaultValue: 1,
    max: MAX_INGREDIENT_COUNT,
  });

  return (
    <div>
      {name}
      <div>
        <Button onClick={decrement} disabled={count === 0}>
          -
        </Button>
        {count}
        <Button onClick={increment} disabled={count === MAX_INGREDIENT_COUNT}>
          +
        </Button>
      </div>
    </div>
  );
};
