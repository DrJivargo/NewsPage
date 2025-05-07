import { Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from './app.component';
import {NewsPageComponent} from '../news-page/news-page.component';
import {HomePageComponent} from './home-page/home-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsPageComponent},
];
