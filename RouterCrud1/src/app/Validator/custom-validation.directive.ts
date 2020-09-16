import { Directive } from '@angular/core';

import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomValidationDirective,
    multi: true
  }]
})
export class CustomValidationDirective {

  constructor() { }
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value=== 'sam') {
      return { 'NameInvalid': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }

}
