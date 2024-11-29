import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'recipes-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  title = 'Recipes Page';
}
