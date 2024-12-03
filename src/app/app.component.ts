import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {ThemeService} from "./services/theme/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'FrontendCrafts';
  @HostBinding('class.collapsed') isCollapsed = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    if (this.isBrowser()) {
      this.themeService.applyThemeToElement(document.querySelector('app-root') as HTMLElement);
    }
  }

  toggleMenu(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const parentLi = target.closest('li');

    if (parentLi) {
      const isOpen = parentLi.classList.contains('open');

      // Закрываем все открытые меню на текущем уровне
      const siblings = parentLi.parentElement?.children;
      if (siblings) {
        Array.from(siblings).forEach((sibling) => {
          (sibling as HTMLElement).classList.remove('open');
        });
      }

      // Открываем/закрываем текущее меню
      if (!isOpen) {
        parentLi.classList.add('open');
      }
    }
  }



  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
