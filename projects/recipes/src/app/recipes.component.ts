import { Component, ElementRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../../../src/app/services/theme/theme.service";

@Component({
  selector: 'recipes-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  title = 'Recipes Page';
  constructor(private themeService: ThemeService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Применяем тему к корневому элементу текущего компонента
    this.themeService.applyThemeToElement(this.elementRef.nativeElement);
  }
}
