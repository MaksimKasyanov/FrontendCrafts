import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'portfolio-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  title = 'Portfolio Page';
}
