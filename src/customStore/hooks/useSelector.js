import { useContext, useEffect, useId, useState } from 'react';
import { StoreContext } from '../contexts/StoreContext';

export const useSelector = (selector) => {
  const id = useId();
  const store = useContext(StoreContext);
  const [value, setValue] = useState(() => selector(store.getState()));

  useEffect(() => {
    store.subscribe(id, (state) => setValue(selector(state)));

    return () => store.unsubscribe(id);
  }, [store, id]);

  return value;
};
