import { UserState } from 'src/app/core/stores/user/user.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUser = createFeatureSelector<UserState>('user');

export const selectUserName = createSelector(
  selectUser,
  (state: UserState) => state.username
);
