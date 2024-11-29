import { bootstrapApplication } from '@angular/platform-browser';
import { PortfolioComponent } from './app/portfolio.component';
import { portfolioConfig } from './app/portfolio.config';

bootstrapApplication(PortfolioComponent, portfolioConfig)
  .catch((err) => console.error(err));
