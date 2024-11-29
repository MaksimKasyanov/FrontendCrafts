import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './portfolio.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const portfolioConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
