import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInputModule } from '../error-input/error-input.module';



@NgModule({
  declarations: [
    InputComponent,
  ],
  exports: [InputComponent],
  imports: [
    CommonModule,
    ErrorInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }
