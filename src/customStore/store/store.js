class Store {
  state;
  rootReducer;

  subscribers = {};

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
    Object.values(this.subscribers).forEach((callback) => callback(this.state));
  }

  subscribe(subscriberId, callback) {
    this.subscribers[subscriberId] = callback;
    this.subscribers[subscriberId](this.state);
  }

  unsubscribe(subscriberId) {
    delete this.subscribers[subscriberId];
  }
}

export const createStore = (() => {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
