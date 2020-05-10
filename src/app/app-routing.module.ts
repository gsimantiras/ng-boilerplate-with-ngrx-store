import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/shared/auth-guard.service';
import { LoggedInGuardService } from './core/shared/logged-in-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInGuardService],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [LoggedInGuardService],
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./features/post/post.module').then((m) => m.PostModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
