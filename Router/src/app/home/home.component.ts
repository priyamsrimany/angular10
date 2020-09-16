import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ParentForm : any[] =[];
  parentOutputVal: any[] =[];


  constructor() { }

  ngOnInit(): void {
  }

  getOutputVal(parentOutputVal: any[])
  {

  }
 
  Register(regForm:NgForm){  
    console.log(regForm.form.value.email);  
    console.log(regForm.form.value.firstname); 
    console.log(regForm.form.value.lastname); 
    this.ParentForm.push({firstname:regForm.form.value.firstname,lastname:regForm.form.value.lastname,email:regForm.form.value.email})
  }  
messageItem: string='';
  OnNotifyClick(message: string)
{
  this.messageItem =message;
}

}
