import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>News Feed</span>
        <span class="example-spacer"></span>
        <a routerLink="/" mat-button>Home</a>
        <a routerLink="/posts" mat-button>Posts</a>
      </mat-toolbar-row>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `.example-link {
      padding: 0 14px;
    }
    .example-spacer {
      flex: 1 1 auto;
    }`
  ]
})
export class AppComponent {
  title = 'news-feed';
}
