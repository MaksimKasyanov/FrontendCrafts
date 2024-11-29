import { bootstrapApplication } from '@angular/platform-browser';
import { recipesConfig } from './app/recipes.config';
import { RecipesComponent } from './app/recipes.component';

bootstrapApplication(RecipesComponent, recipesConfig).catch((err) => console.error(err));
