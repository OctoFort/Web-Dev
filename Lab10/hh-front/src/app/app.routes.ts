import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CompanyComponent} from './company/company.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import {CompanyDetailsComponent} from './company-details/company-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'companies',
    component: CompanyComponent,
    title: 'company',
  },
  {
    path: 'companies/:id',
    component: CompanyDetailsComponent,
    title: 'company-details',
  },
  {
    path: 'vacancies',
    component: VacancyComponent,
    title: 'vacancy',
  },
];
