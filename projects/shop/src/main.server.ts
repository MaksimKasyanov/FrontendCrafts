import { bootstrapApplication } from '@angular/platform-browser';
import { ShopComponent } from './app/shop.component';
import { config } from './app/shop.config.server';

const bootstrap = () => bootstrapApplication(ShopComponent, config);

export default bootstrap;
