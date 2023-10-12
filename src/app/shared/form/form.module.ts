import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ErrorInputModule } from '../error-input/error-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ErrorInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
