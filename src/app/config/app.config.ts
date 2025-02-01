import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from '../app.routes';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NGX_UI_LOADER_CONFIG } from './ngx-ui-loader.config';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom([
      BrowserModule,
      NgxUiLoaderModule.forRoot(NGX_UI_LOADER_CONFIG),
    ]),
    {
      provide: MessageService,
    },
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
