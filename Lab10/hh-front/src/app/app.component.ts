import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { CommonModule} from '@angular/common';
import {CompanyComponent} from './company/company.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, CompanyComponent, RouterLink],
  template:`
    <header>
      <ul>
        <a [routerLink]="['/']"><li>Home</li></a>
        <a [routerLink]="['/companies/']"><li>Companies</li></a>
        <a [routerLink]="['/vacancies/']"><li>Vacancies</li></a>
      </ul>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
}
