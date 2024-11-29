import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './recipes.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const recipesConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
