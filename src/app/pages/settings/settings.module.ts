import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [SettingsComponent, UserComponent, AppComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
