import {
  NgModule,
  ModuleWithProviders,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  // HTTP_INTERCEPTORS
} from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../../environments/environment';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { throwIfAlreadyLoaded } from './helpers/module-import.guard';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    // FlexLayoutModule
    // ServiceWorkerModule.register('/ngsw-worker.js', {
    //   enabled: environment.production
    // })
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        // ...SERVICES,
        // ...INTERCEPTORS
      ]
    } as ModuleWithProviders;
  }
}
