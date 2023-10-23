import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() mode: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  get buttonClasses() {
    return ['btn', `btn__${this.mode}`, `btn__${this.size}`, this.disabled ? 'disabled' : ''];
  }
}
