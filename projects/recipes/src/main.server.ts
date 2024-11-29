import { bootstrapApplication } from '@angular/platform-browser';
import { RecipesComponent } from './app/recipes.component';
import { config } from './app/recipes.config.server';

const bootstrap = () => bootstrapApplication(RecipesComponent, config);

export default bootstrap;
