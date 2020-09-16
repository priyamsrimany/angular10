import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormArray, FormControl} from '@angular/forms';
import {CustomValidationDirective} from './../../Validator/custom-validation.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }


  myForm = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(2),Validators.pattern("[A-Za-z]{10}")]],
    email: ['', [Validators.required,Validators.email,emailDomain]],
    address: this.fb.group({
      address1:['',Validators.required],
      state: [''],
      zip: ['']
    }),
    alteremail: this.fb.array([])
  });
 
  AddAlterEmail()
  {
    this.alteremail.push(this.fb.control(''));
  }
  get alteremail()
  {
    return this.myForm.get('alteremail') as FormArray;
  }
  get name()
  {
    return this.myForm.get('name');
  }

  get email()
  {
    return this.myForm.get('email');
  }

  get address1()
  {
    return this.myForm.get('address').get('address1');
  }

  submitted: boolean= false;
  ngOnInit(): void {
   
    //
  }
  onSubmit(form: FormGroup)
  {
    
    console.log(this.name.value);
    console.log(this.alteremail.value)
    //
  }

}
function  emailDomain(control: AbstractControl): {[key: string]: any} | null 
{
  const emailId: string= control.value;
  const domain: string = emailId.substring(emailId.indexOf('@')+1);
  if(domain.toLocaleLowerCase() === 'gmail.com')
  {
    return {'emailDomain':true};
  } 
  else{
    return null;
  }
}
