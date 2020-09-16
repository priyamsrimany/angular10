import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private ActRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let parameterName = this.ActRoute.snapshot.paramMap.get('Id');
    alert(parameterName);
  }
  BackToUser():void{
    this.router.navigate(['/UserList'])
  }

}
