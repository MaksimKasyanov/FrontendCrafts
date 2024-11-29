import { bootstrapApplication } from '@angular/platform-browser';
import { PortfolioComponent } from './app/portfolio.component';
import { config } from './app/portfolio.config.server';

const bootstrap = () => bootstrapApplication(PortfolioComponent, config);

export default bootstrap;
