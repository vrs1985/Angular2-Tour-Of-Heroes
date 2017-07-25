import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
                  <h1>{{title}}</h1>
                  <nav>
                    <a routerLink='/dashboard'>Dashboard</a>
                    <a routerLink='/heroes'>Heroes</a>
                  </nav>
                  <router-outlet></router-outlet>
                  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'Tour of heroes';
}