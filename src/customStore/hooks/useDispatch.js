import { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';

export const useDispatch = () => {
  const store = useContext(StoreContext);

  return store.dispatch.bind(store);
};
