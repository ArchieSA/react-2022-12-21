export const CART_ACTIONS = {
  add: 'cart/add',
  remove: 'cart/remove',
  clear: 'cart/clear',
};

export const addDish = (payload) => ({ type: CART_ACTIONS.add, payload });
export const removeDish = (payload) => ({ type: CART_ACTIONS.remove, payload });
export const clearCart = () => ({ type: CART_ACTIONS.clear });
