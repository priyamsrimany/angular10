import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UsertitlePipe } from '../pipes/usertitle.pipe';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  empNameForPipe='priyam';
  genderForPipe ='male';

  fullnamelength: string= '';
  empForm: FormGroup;
  
  items: FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.fb.group(
      {
          fullname:['',[Validators.required,Validators.maxLength(2)]],
          gender: ['male',Validators.required],
          email: ['',[Validators.required,Validators.email]],
          skill: this.fb.group({
            skillname: [''],
            experience:[''],
            proficiency:['beginer']
          }),
          
          items: this.fb.array([ this.createItem() ])
      });
      this.empForm.get("fullname").valueChanges.subscribe(value => {
          this.fullnamelength=value.length;
      })
    }
    onSubmit()
    {
      console.log(this.empForm.value)
    }
    OnLoadData(): void
    {
      this.empForm.setValue({
        fullname:"Subhamoy",
        gender:"male",
        email:"bhaumik@tcs.com",
        skill:
        {
          skillname:"SAP",
          experience:"10",
          proficiency:"beginer"
        }
      })
    }

    ClaerData(): void
    {
     /* this.empForm.setValue({ //instead of setvalue we can use patch value to update few control instaed of all form control
        fullname:"",
        email:"",
        skill:
        {
          skillname:"",
          experience:"",
          proficiency:"beginer"
        }
      }) */
      this.logFormGroup(this.empForm);
    }
    logFormGroup(group: FormGroup):void
    {
      //this.empForm.get("name").value
      alert(this.empForm.get("gender").value);
      //userTitle:user.gender
        console.log(Object.keys(group.controls));
        Object.keys(group.controls).forEach((key:string) =>
        {
            const controls1 = group.get(key);
            if(controls1 instanceof FormGroup)
            {
              console.log("form group name-" +controls1);
                this.logFormGroup(controls1);
            }
            else{
              console.log("Key - "+ key +" value -" +controls1.value);
            }
        })
    }

     /////////////Dynamic control add start////////////////
  createItem(): FormGroup {
    return this.fb.group({
      name: [''],
      price: ['']
    });
  }

  addItem(): void {
    this.items = this.empForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  /////////////Dynamic control add end////////////////

}
