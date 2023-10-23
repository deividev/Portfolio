import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ErrorKeys } from 'src/app/core/models';
import { getValidationErrorMessage } from '../../../core/utilities';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent implements OnChanges, OnDestroy {
  @Input() control: FormControl = new FormControl();
  errorMessage: string = '';
  $subscription = new Subscription();

  ngOnChanges(): void {
    this.$subscription.unsubscribe();

    this.$subscription = this.control.valueChanges.subscribe(() => {
      this.errorMessage = this.control.errors
        ? getValidationErrorMessage(
            Object.keys(this.control.errors)[0] as ErrorKeys
          )
        : '';
    });
  }

  ngOnDestroy(): void {
    this.$subscription.unsubscribe();
  }
}
