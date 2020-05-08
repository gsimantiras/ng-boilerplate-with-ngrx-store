import { createAction, props } from '@ngrx/store';
import { UserState } from './user.reducer';

export const UserActionTypes = {
  login: '[User] Login',
  logout: '[User] Logout',
  changeUserName: '[User] ChangeUserName',
};

const login = createAction(UserActionTypes.login, props<UserState>());

const changeUserName = createAction(
  UserActionTypes.changeUserName,
  props<{ username: string }>()
);

const logout = createAction(UserActionTypes.logout);

export const UserActions = { login, logout, changeUserName };
