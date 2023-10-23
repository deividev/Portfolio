import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { emailValidator } from '../../../core/utilities';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() config: any = {
    configHeaders: {},
    urlSubmit: '',
    controls: [
      {
        label: 'firstName',
        input: 'firstName',
        validations: [(control: AbstractControl) => this.customValidation(control, 'firstName')],
      },
      {
        label: 'email',
        input: 'email',
        validations: [
          Validators.required,
          (control: AbstractControl) => this.customValidation(control, 'email')
        ],
      },
      {
        label: 'password',
        input: 'password',
        validations: [(control: AbstractControl) => this.customValidation(control, 'password')],
      },
    ],
    literals: {
      btnText: 'Enviar',
    },
  };

  form: FormGroup;
  private fb: FormBuilder = new FormBuilder();
  literals: any = {};

  constructor() {
    const groupsForm: Record<
      string,
      (
        | string
        | ((control: AbstractControl<any, any>) => ValidationErrors | null)
        | [
            (control: AbstractControl<any, any>) => ValidationErrors | null,
            (control: AbstractControl<any, any>) => ValidationErrors | null
          ]
      )[]
    > = {};
    this.config?.controls.forEach((groupForm: any) => {
      const controlValidations = groupForm.validations;
      groupsForm[groupForm.label] = ['', controlValidations];
    });
    this.form = this.fb.group(groupsForm);
    this.literals = this.config.literals;
  }

  sendForm(): void {
    debugger
  if (this.form.valid) {
    console.log(this.form);
  } else {
    this.form.updateValueAndValidity();
  }
}

  customValidation(control: AbstractControl, controlName: string): ValidationErrors | null {
    const validationList: { [key: string]: (control: AbstractControl) => { [key: string]: any } | null } = {
      email: emailValidator,
      // Agrega más validaciones personalizadas según tus necesidades
    };
    if (control.dirty) {
      if (validationList.hasOwnProperty(controlName)) {
        const validationFn = validationList[controlName];
        const errors = validationFn(control);

        if (errors) {
          return { [controlName]: errors };
        }
      }
    }
    return null;
  }
}
