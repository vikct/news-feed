import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="{'dark-theme': isThemeDark | async}">
      <div class="mat-app-background">
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
      </div>
    </div>
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
export class AppComponent implements OnInit {
  isThemeDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isThemeDark = this.themeService.isThemeDark;
  }

}
