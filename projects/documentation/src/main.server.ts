import { bootstrapApplication } from '@angular/platform-browser';
import { DocumentationComponent } from './app/documentation.component';
import { config } from './app/documentation.config.server';

const bootstrap = () => bootstrapApplication(DocumentationComponent, config);

export default bootstrap;
