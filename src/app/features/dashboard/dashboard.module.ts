import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { PostsService } from './shared/posts.service';
import * as fromDashboard from './posts-store/dashboard.reducer';
import { PostsEffects } from './posts-store/posts.effects';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,

    // ngrx
    StoreModule.forFeature(
      fromDashboard.dashboardFeatureKey,
      fromDashboard.reducer
    ),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostsService],
})
export class DashboardModule {}
