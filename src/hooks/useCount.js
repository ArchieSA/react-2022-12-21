import { useState, useCallback } from 'react';

export const useCount = ({ defaultValue = 0, min = 0, max = 5 } = {}) => {
  const [count, setCount] = useState(defaultValue);

  const decrement = useCallback(
    () =>
      setCount((prevState) => (prevState === min ? prevState : prevState - 1)), // создаётся максимально стабильная ссылка на функцию
    [min]
  );

  const increment = useCallback(
    () =>
      setCount((prevState) => (prevState === max ? prevState : prevState + 1)),
    [max]
  );

  return { count, decrement, increment };
};
