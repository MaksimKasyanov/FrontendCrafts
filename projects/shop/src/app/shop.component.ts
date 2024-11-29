import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shop-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  title = 'Shop Page';
}
