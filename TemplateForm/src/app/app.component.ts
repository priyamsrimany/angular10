import { Component } from '@angular/core';
import { Product } from "./Product";
import { CustomvalidatorDirective } from './shared/customvalidator.directive'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateForm';
   productList = ["Iphone","Ipad","MacBook"];
  /// prod = new Product(1,"Priyam","Ipad");
   onSubmit(formVal: any)
   {
    let objItem =new Product(formVal.name,formVal.email,formVal.address,formVal.product); 
    console.log(objItem);
     console.log(formVal.name);
   }
}
