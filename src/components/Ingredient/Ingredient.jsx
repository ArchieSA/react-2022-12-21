import { Button } from "../Button/Button";
import { useState } from "react";

export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);

  if (!ingredient) {
    return null;
  }

  return <div style={{ display: 'flex', gap: 15 }}>
    {ingredient}
    <div>
      <Button onClick={() => setCount(Math.max(count - 1, 0))}>-</Button>
      {count}
      <Button onClick={() => setCount(Math.min(count + 1, 5))}>+</Button>
    </div>
  </div>
}