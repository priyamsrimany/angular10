import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,ValidationErrors,FormGroup,FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  empForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.fb.group(
      {
          fullname:[''],
          email: [''],
          skill: this.fb.group({
            skillname: [''],
            experience:[''],
            proficiency:['beginer']
          })
      });


  }

 

}

