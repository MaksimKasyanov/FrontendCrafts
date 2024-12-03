import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';
  private themeSubject = new BehaviorSubject<'light-theme' | 'dark-theme'>('light-theme');

  theme$ = this.themeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    // Проверяем, что выполняется в браузере
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
      this.currentTheme = savedTheme || 'light-theme';
      this.themeSubject.next(this.currentTheme);
    }
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.currentTheme = newTheme;

    // Сохраняем в localStorage
    if (this.isBrowser()) {
      localStorage.setItem('theme', newTheme);
    }

    // Уведомляем подписчиков
    this.themeSubject.next(newTheme);
  }

  applyThemeToElement(element: HTMLElement): void {
    this.theme$.subscribe((theme) => {
      if (element) {
        this.renderer.removeClass(element, 'light-theme');
        this.renderer.removeClass(element, 'dark-theme');
        this.renderer.addClass(element, theme);
      }
    });
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
