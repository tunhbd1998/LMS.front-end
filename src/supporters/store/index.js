import {
  signUpReducer,
  authReducer,
  mainReducer
} from '@supporters/store/redux/reducers';
import store from './store';

export function getStore() {
  const instance = store.getInstance();

  // inject reducers
  store.injectReducer('authReducer', authReducer);
  store.injectReducer('mainReducer', mainReducer);
  store.injectReducer('signUpReducer', signUpReducer);

  return instance;
}
