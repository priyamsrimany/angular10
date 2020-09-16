import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
@Input() ChildInputArr:any[]=[];

itemarr: any[]=[];
@Output() ChildOutput = new EventEmitter<any[]>();
@Output() childNotification = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void 
  {
    //
  }
  ChekedItem(event):void
  {
    let checkedItem = event.target.value;
  if(this.itemarr.length>0)
  {
    if(this.itemarr.indexOf(checkedItem) == -1)
    {
      this.itemarr.push(checkedItem);
      console.log(this.itemarr.length);
      
    } 
  }
  else
  {
    this.itemarr.push(checkedItem);
    console.log(this.itemarr.length)
  }
  this.ChildOutput.emit(this.itemarr);
  }

  PushOutput():void
  {
    this.childNotification.emit("Notification from parent");
  }
}
