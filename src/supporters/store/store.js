import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { commonReducer } from './common.reducer';

class Store {
  constructor() {
    this.reducers = {};
    this.middlewares = [];
    this.instance = null;
  }

  init(reducers, middlewares) {
    this.reducers = { ...reducers };
    this.middlewares = [...middlewares];
  }

  getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.init({ commonReducer }, [thunk]);
    this.instance = createStore(
      combineReducers(this.reducers),
      process.env.REACT_APP_NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(...this.middlewares))
        : applyMiddleware(...this.middlewares)
    );

    return this.instance;
  }

  injectReducer(reducerName, reducer) {
    if (this.instance) {
      this.reducers = {
        ...this.reducers,
        [reducerName]: reducer
      };

      this.instance.replaceReducer(combineReducers(this.reducers));
    }
  }
}

export default new Store();
