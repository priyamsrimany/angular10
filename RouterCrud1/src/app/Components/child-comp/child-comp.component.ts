import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ParentItem} from './../../Class/ParentItems';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit 
{
  @Input() child;
  @Output() childOp= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {  }
  SubmitVal(name:string,address:string):void
  {
    let op: string= name+";"+address;
    this.childOp.emit(op);
  }
}
