import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button.component';



@NgModule({
  declarations: [
    ToggleButtonComponent,
  ],
  exports: [ToggleButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ToggleButtonModule { }
