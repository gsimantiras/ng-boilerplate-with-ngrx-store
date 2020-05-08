import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export interface UserState {
  username: string;
  password: string;
}

export const initialState: UserState = {
  username: '',
  password: '',
};

const userReducer = createReducer(
  initialState,
  on(UserActions.login, (state, user) => ({
    username: user.username,
    password: user.password,
  })),
  on(UserActions.changeUserName, (state, { username }) => ({
    ...state,
    username,
  })),
  on(UserActions.logout, () => initialState)
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
