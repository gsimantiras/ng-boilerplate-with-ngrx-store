import { AuthEffects } from './shared/auth-store/auth.effects';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import * as fromAuth from './shared/auth-store/auth.reducer';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
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
    StoreModule.forRoot({ user: fromAuth.reducer }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
