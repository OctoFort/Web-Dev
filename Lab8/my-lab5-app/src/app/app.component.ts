import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:`
    <header>
      <a [routerLink]="['/']">
        <img class="logo" src="/assets/logo.png" alt="test">
        <span class="logo-text">NOT Kaspi.kz</span>
      </a>

    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-lab4-app';
}
