import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template:`
    <header>
      <img class="logo" src="/assets/logo.png" alt="test">
      <span class="logo-text">NOT Kaspi.kz</span>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-lab4-app';
}
