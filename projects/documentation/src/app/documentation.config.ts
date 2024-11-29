import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './documentation.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const documentationConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
