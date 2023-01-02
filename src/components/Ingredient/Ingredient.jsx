import { useState } from "react";
import { Button } from "../Button/Button";
export const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      <p>{ingredient}</p>
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
    </>
  );
};
