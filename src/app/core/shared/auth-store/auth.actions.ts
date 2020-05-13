import { createAction, props } from '@ngrx/store';

import { User } from '../user.model';

export const AuthActionTypes = {
  login: '[Auth] Login',
  loginWithToken: '[Auth] Login With Token',
  loginSuccess: '[Auth] Login Success',
  loginError: '[Auth] Login Error',
  changeUserName: '[Auth] ChangeUserName',
  logout: '[Auth] Logout',
  logoutSuccess: '[Auth] Logout Success',
  logoutError: '[Auth] Logout Error',
  signup: '[Auth] SignUp',
  signupSuccess: '[Auth] SignUp Success',
  signupError: '[Auth] SignUp Error',
};

//#region login

const login = createAction(AuthActionTypes.login, props<{ user: User }>());

const loginWithToken = createAction(
  AuthActionTypes.loginWithToken,
  props<{ user: User }>()
);

const loginSuccess = createAction(
  AuthActionTypes.loginSuccess,
  props<{ user: User }>()
);

const loginError = createAction(
  AuthActionTypes.loginError,
  props<{ error: any }>()
);

const changeUserName = createAction(
  AuthActionTypes.changeUserName,
  props<{ username: string }>()
);

//#endregion login

//#region logout
const logout = createAction(AuthActionTypes.logout);

const logoutSuccess = createAction(AuthActionTypes.logoutSuccess);

const logoutError = createAction(
  AuthActionTypes.logoutError,
  props<{ error: any }>()
);
//#endregion logout

//#region signup

const signup = createAction(AuthActionTypes.signup, props<{ user: User }>());

const signupSuccess = createAction(
  AuthActionTypes.signupSuccess,
  props<{ user: User }>()
);

const signupError = createAction(
  AuthActionTypes.signupError,
  props<{ error: any }>()
);

//#endregion singnup

export const AuthActions = {
  login,
  loginWithToken,
  loginSuccess,
  loginError,
  logout,
  logoutSuccess,
  logoutError,
  changeUserName,
  signup,
  signupSuccess,
  signupError,
};
