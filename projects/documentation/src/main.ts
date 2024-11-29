import { bootstrapApplication } from '@angular/platform-browser';
import { DocumentationComponent } from './app/documentation.component';
import { documentationConfig } from './app/documentation.config';

bootstrapApplication(DocumentationComponent, documentationConfig).catch((err) => console.error(err));
