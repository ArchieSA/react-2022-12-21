import {Button} from "../Button/Button";
import {useState} from "react";

export const Ingredient = ({name}) => {
  const [count, setCount] = useState(1);

  const addIngredient = () => {
    if(count < 5)
      setCount(count + 1)
  }

  const removeIngredient = () => {
    if(count > 0)
      setCount(count - 1)
  }

  return <div>
    {name}
    <Button onClick={removeIngredient}>
      -
    </Button>
    {count}
    <Button onClick={addIngredient}>
      +
    </Button>
  </div>
}