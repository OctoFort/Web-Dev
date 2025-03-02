import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template:
  `
    <header>
        <ul>
          <a [routerLink]="['/']"><li>Home</li></a>
          <a [routerLink]="['/albums']"><li>Albums</li></a>
          <a [routerLink]="['/about']"><li>About</li></a>
        </ul>
    </header>
    <router-outlet></router-outlet>
  `,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-lab6-project';
}
