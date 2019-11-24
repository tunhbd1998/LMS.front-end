import store from './store';
import { authReducer, mainReducer } from './redux/reducers';

export function getStore() {
  const instance = store.getInstance();

  // inject reducers
  store.injectReducer('authReducer', authReducer);
  store.injectReducer('mainReducer', mainReducer);

  return instance;
}
