import { Component, OnInit } from '@angular/core';
import {UsertitlePipe} from '../pipes/usertitle.pipe'

@Component({
  selector: 'app-emp-list-pipe-filetr',
  templateUrl: './emp-list-pipe-filetr.component.html',
  styleUrls: ['./emp-list-pipe-filetr.component.css']
})
export class EmpListPipeFiletrComponent implements OnInit {

empArr = [
  {EmpName:"Priyam" , Gender: 'Female'},
  {EmpName:"subhamoy" , Gender: 'male'}

]
  constructor() { }

  ngOnInit(): void {
  }

}
