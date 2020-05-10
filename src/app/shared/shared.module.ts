import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent],
  imports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    // vendor
    CommonModule,
    RouterModule,
    FormsModule,

    // material
    MatCardModule,
    MatButtonModule,

    // local
    ListComponent,
  ],
})
export class SharedModule {}
