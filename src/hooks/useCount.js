import { useState, useCallback } from 'react';

export const useCount = ({ defaultValue = 0, min = 0, max = 5 } = {}) => {
  const [count, setCount] = useState(defaultValue);

  const decrement = useCallback(
    () => setCount((prevCount) => (prevCount === min ? min : prevCount - 1)),
    [min]
  );

  const increment = useCallback(
    () => setCount((prevCount) => (prevCount === max ? max : prevCount + 1)),
    [max]
  );

  return { count, decrement, increment };
};
