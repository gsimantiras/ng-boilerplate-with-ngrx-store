import { Action, createReducer, on } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import { User } from '../user.model';

export interface AuthState {
  user: User;
  authState?: User;
  loading: boolean;
}

export const initialState: AuthState = {
  user: {
    username: '',
    password: '',
  },
  loading: false,
};

const userReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => ({
    user: {
      username: action.user.username,
      password: action.user.password,
    },
    loading: true,
  })),
  on(AuthActions.loginWithToken, (state, action) => ({
    user: {
      token: action.user.token,
      username: '',
      password: '',
    },
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    authState: action.user,
    loading: false,
  })),
  on(AuthActions.loginError, (state) => ({ ...state, loading: false })),
  on(AuthActions.changeUserName, (state, { username }) => ({
    ...state,
    username,
  })),

  on(AuthActions.logout, () => initialState),
  on(AuthActions.logoutSuccess, () => (initialState)),
  on(AuthActions.logoutError, (state) => ({ ...state, loading: false })),

  on(AuthActions.signup, (state, action) => ({
    user: {
      username: action.user.username,
      password: action.user.password,
    },
    loading: true,
  })),
  on(AuthActions.signupSuccess, (state, action) => ({
    ...state,
    authState: action.user,
    loading: false,
  })),
  on(AuthActions.signupError, (state) => ({ ...state, loading: false }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return userReducer(state, action);
}
