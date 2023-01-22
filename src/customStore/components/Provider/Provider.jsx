import { StoreContext } from '../../contexts/StoreContext';

export const Provider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
