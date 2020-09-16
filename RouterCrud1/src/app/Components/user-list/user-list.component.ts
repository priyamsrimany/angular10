import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   Users =
  [
    {Name:'Priyam',Id:1,LastName:'Srimany'},
    {Name:'Bubly',Id:2,LastName:'Bhaumik'},
    {Name:'Sheli',Id:3,LastName:'Ghosh'}
  ]

  constructor(private router: Router) { }

  ngOnInit(){
  }
  OnSelect(user)
  {
this.router.navigate(['/UserList',user.Id])
  }
  AddUser()
  {
    this.router.navigate(['/AddUser'])
  }

}
