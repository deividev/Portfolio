import { AbstractControl } from "@angular/forms";
import { ConfigValidation, ErrorKeys } from "../models";

const configValidation: ConfigValidation = {
    required: 'This field is required',
    email: 'This Email field is incorrect value',
}

export const getValidationErrorMessage = (errorName: ErrorKeys) => {
    debugger
    return configValidation[errorName];
};

export const emailValidator = (control: AbstractControl): { [key: string]: any } | null => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const value = control.value;
    const valid = emailRegex.test(value);
    return valid ? null : { invalidEmail: { value } };
  }

