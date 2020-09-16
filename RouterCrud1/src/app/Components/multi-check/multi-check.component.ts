import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-check',
  templateUrl: './multi-check.component.html',
  styleUrls: ['./multi-check.component.css']
})
export class MultiCheckComponent implements OnInit {

  personForm:FormGroup;
  finalArray=[];
  ordersData = [
    { id: 100, name: 'playing guiter' },
    { id: 200, name: 'playing card' },
    { id: 300, name: 'swimming' },
    { id: 400, name: 'reading' }
  ];
  checkItem=[
  { name: 'reading' },
  { name: 'swimming' }
];

compareArray(ordersData,checkItem)
{
  let isFound= false;
ordersData.forEach(element => 
  
  {checkItem.forEach(element1 => 
    {
      
        if(element.name== element1.name)
        {
            isFound= true;       
        }
    });
    if(isFound)
    {
      this.finalArray.push({name:element.name,id:element.id,Checked:true}) 
    }
    else 
    {
      this.finalArray.push({name:element.name,id:element.id,Checked:false}) 
    }
    isFound=false;  
});

}
  constructor() { }

  ngOnInit(): void {
this.compareArray(this.ordersData,this.checkItem);
this.personForm = new FormGroup({
  hobbies: this.createHobbies(this.finalArray)
});


  }
  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return new FormControl(hobby.Checked);
    });
    return new FormArray(arr);
  }

  onSubmit()
  {
    //
  }
}
