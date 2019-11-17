import store from './store';
import { authReducer } from './redux/reducers';

export function getStore() {
  const instance = store.getInstance();

  // inject reducers
  store.injectReducer('authReducer', authReducer);

  return instance;
}
