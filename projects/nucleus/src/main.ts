import { bootstrapApplication } from '@angular/platform-browser';
import { NucleusComponent } from './app/nucleus.component';
import { nucleusConfig } from './app/nucleus.config';

bootstrapApplication(NucleusComponent, nucleusConfig).catch((err) => console.error(err));
