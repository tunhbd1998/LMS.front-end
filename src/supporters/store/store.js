import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { hasIn } from 'lodash';

import { commonReducer } from './redux/reducers/common.reducer';

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

  isExistsReducer(reducerName) {
    return hasIn(this.reducers, reducerName);
  }

  injectReducer(reducerName, reducer) {
    if (this.instance) {
      if (this.isExistsReducer(reducerName)) {
        return;
      }

      this.reducers = {
        ...this.reducers,
        [reducerName]: reducer,
      };

      this.instance.replaceReducer(combineReducers(this.reducers));
    }
  }
}

export default new Store();
