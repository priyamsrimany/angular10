import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 
import {ParentItem} from './../../Class/ParentItems';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  constructor() { }
  filterItem: ParentItem[]=[];
  itemArr:ParentItem[]=[];
  receivedChildMessage1: string[]=[];
  ngOnInit(): void {
    this.itemArr.push({Id:1,Name:"Priyam",Address:"Kolkata"});
    this.itemArr.push({Id:1,Name:"Priyam",Address:"Kolkata"});
    this.itemArr.push({Id:1,Name:"Priyam",Address:"Kolkata"});
  }
receivedChildMessage(event: string)
{
  if(event!==null && event!=='undefined')
  {
    if(event.indexOf(';')>0)
    {
      this.receivedChildMessage1 = event.split(';');
      this.itemArr.push({Id:1,Name:this.receivedChildMessage1[0],Address:this.receivedChildMessage1[1]});
      this.filterItem =  this.itemArr.filter(function(item) {
        return item.Name == "test";
      });
    }
  }
  
}

}
