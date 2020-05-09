import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './stores/user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    
    // material
    MatToolbarModule,
    MatButtonModule,

    // ngrx
    StoreModule.forRoot({ user: fromUser.reducer }),
    EffectsModule.forRoot()
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
