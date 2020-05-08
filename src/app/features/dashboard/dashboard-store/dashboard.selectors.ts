import { dashboardFeatureKey } from './dashboard.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from 'src/app/features/dashboard/dashboard-store/dashboard.reducer';

export const selectPostState = createFeatureSelector<DashboardState>(
  dashboardFeatureKey
);

export const selectPosts = createSelector(
  selectPostState,
  (state: DashboardState) => state.posts
);
