import { bootstrapApplication } from '@angular/platform-browser';
import { ShopComponent } from './app/shop.component';
import { shopConfig } from './app/shop.config';

bootstrapApplication(ShopComponent, shopConfig).catch((err) => console.error(err));
