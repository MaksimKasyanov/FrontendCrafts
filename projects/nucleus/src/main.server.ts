import { bootstrapApplication } from '@angular/platform-browser';
import { NucleusComponent } from './app/nucleus.component';
import { config } from './app/nucleus.config.server';

const bootstrap = () => bootstrapApplication(NucleusComponent, config);

export default bootstrap;
