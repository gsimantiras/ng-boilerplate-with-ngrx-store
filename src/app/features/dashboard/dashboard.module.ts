import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import * as fromDashboard from './dashboard-store/dashboard.reducer';
import { PostsService } from './services/posts.service';

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
  ],
  providers: [PostsService],
})
export class DashboardModule {}
