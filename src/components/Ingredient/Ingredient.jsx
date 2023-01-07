import { Button } from "../Button/Button"
import { useState } from "react";

export const Ingredient = ({ingredient}) => {
  
  const [count, setCount] = useState(1);

  return <div>
    {ingredient}
    <Button onClick={() => {
      if (count>0)
        setCount(count-1)
      }}
      >-</Button>
    {count}
    <Button onClick={() => {
      if (count<5)
        setCount(count+1)
      }}
    >+</Button>
  </div>
}