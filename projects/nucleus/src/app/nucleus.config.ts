import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './nucleus.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const nucleusConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
