import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Name= new FormControl('');
  UserName= new FormControl('');

  LoginForm= new FormGroup({
    UserId: new FormControl(''),
  Password: new FormControl(''),
  Capcha: new FormControl(''),
  skill: new FormControl('')
  })
  
 
  LoginItem()
  {
    var item = [
      {
      User: this.LoginForm.get('UserId').value,
      Password: this.LoginForm.get('Password').value,
      Capcha: this.LoginForm.get("Capcha").value,
      Skill: this.LoginForm.get("skill").value
      }
    ]
    console.log(item);
  }
   Hero =[
    {
      Name: 'Priyam',
      Id: 1

    },
    {
      Name: 'Bubly',
      Id: 2

    },
    {
      Name: 'Poly',
      Id: 3

    }
  ]
  title = 'myapp';
  onSelect(hero)
  {
    alert(hero.Name)
  }
  showText(value)
  {
    alert(value)
  }
}
