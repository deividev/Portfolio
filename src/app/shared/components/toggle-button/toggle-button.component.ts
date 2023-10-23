import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@shared/services/theme.service';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {

  constructor( private themeService: ThemeService) { }

  ngOnInit(): void {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    this.themeService.setTheme('dark');
  }

  toggleMode(event: any): void {
    if (event.target.checked) {
      document.querySelector('body')?.setAttribute('data-theme', 'light');
      this.themeService.setTheme('light');
    }
    else {
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
      this.themeService.setTheme('dark');
    }
  }

}
