import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {HttpClientModule} from '@angular/common/http';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'details',
  }

];
