import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonComponent } from './ui/toggle-button/toggle-button.component';



@NgModule({
  declarations: [
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToggleButtonComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
