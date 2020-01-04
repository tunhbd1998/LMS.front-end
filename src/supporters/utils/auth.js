import { updateCookie, deleteCookie } from './cookies';

export const saveAuthInfo = (token, role) => {
  updateCookie('token', token);
  updateCookie('role', role);
};

export const removeAuthInfo = () => {
  deleteCookie('token');
  deleteCookie('role');
};
