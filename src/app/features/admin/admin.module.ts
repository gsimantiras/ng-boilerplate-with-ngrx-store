import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  declarations: [AdminViewComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
