import { Directive } from '@angular/core';
import {Validator,AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[appCustomvalidator]',
  providers: [{
    provide:NG_VALIDATORS,
    useExisting: CustomvalidatorDirective,
    multi:true
  }]

})
export class CustomvalidatorDirective implements Validator{

  constructor() { }
  validate(control:AbstractControl):{[key: string]: any} | null
  {
    if(control.value =="Ipad")
    {
      return {'ipadSelected': true};
    }
    else{
      return null;
    }
  }

}
