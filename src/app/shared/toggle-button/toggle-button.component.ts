import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent implements OnInit {
  ngOnInit(): void {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
  }

  toggleMode(event: any): void {
    if (event.target.checked) document.querySelector('body')?.setAttribute('data-theme', 'light');
    else document.querySelector('body')?.setAttribute('data-theme', 'dark');
  }

}
