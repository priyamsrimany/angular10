import { Component, OnInit } from '@angular/core';
import {user} from './../../Class/User';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  professions = ['doctor','engineer','professor'];
  model= new user(1,'','');
  submitted= false;
  constructor() { }

  ngOnInit(): void {
    
    //this.model = new user(42, 'Priyam', 'professor');
  }
  onSubmit() { 
    console.log(this.model.name);
    this.submitted = true; 
  }
  newUser() {
    this.model = new user(42, '', '');
  }


  newHero() {
    this.model = new user(42, '', '');
    
  }

}
