import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a class="button" routerLink="/challenge-1-2">Challenge 1 & 2</a> |
    <a class="button" routerLink="/challenge-3">Challenge 3</a>
  </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
 
}
