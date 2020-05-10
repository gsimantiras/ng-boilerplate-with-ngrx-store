import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AuthState } from './auth.reducer';

export const selectState = createFeatureSelector<AuthState>('user');

export const selectUser = createSelector(
  selectState,
  (state: AuthState) => state.user
);

export const selectUserName = createSelector(
  selectState,
  (state: AuthState) => state.user.username
);

export const selectLoader = createSelector(
  selectState,
  (state: AuthState) => state.loading
);

export const selectAuthState = createSelector(
  selectState,
  (state: AuthState) => {
    return state.user.username;
  } // todo change to state.authStata
);

export const selectToken = createSelector(
  selectState,
  (state: AuthState) => {
    return state;
  } // todo change to state.authStata
);
