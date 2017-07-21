import { Routes } from '@angular/router';
import { HomePageComponent } from './containers/home/home-page/home-page.component';
import { UserPageComponent } from './containers/user/user-page/user-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'users', component: UserPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
