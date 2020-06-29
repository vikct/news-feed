import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>News Feed</span>
        <span class="example-spacer"></span>
        <a routerLink="/" mat-button>Home</a>
        <a routerLink="/posts" mat-button>Posts</a>
        <mat-slide-toggle
          [checked]="isThemeDark | async"
          (change)="toggleDarkTheme($event.checked)"
        >Dark theme</mat-slide-toggle>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: [`
    .example-link {
      padding: 0 14px;
    }
    .example-spacer {
      flex: 1 1 auto;
    }
  `]
})
export class NavbarComponent implements OnInit {

  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isThemeDark = this.themeService.isThemeDark;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
