import { Component } from '@angular/core';
import {FreeApiServices}  from './Services/freeapi.services'

import {Comments} from './Classes/comments';
import {Posts} from './Classes/posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud';
  updateItem = Posts;
  AddedArr: Posts;
  PostArr: Posts[];
   CommentsArr : Comments[];
   errorMsg;
  constructor(private _freeapi: FreeApiServices){}
  ngOnInit(){
  
    this._freeapi.getComments().subscribe(
      (data) =>
      {
        this.CommentsArr = data; 
      },
      (error) =>
      {
       this.errorMsg= error.message; 
      }
    );


    this._freeapi.getCommentsById().subscribe(
      (data) =>
      {
        this.PostArr = data; 
      },
      (error) =>
      {
       this.errorMsg= error.message; 
      }
    );

      var opost = new Posts();
      opost.body ="Hi Priyam";
      opost.userId =1;
      opost.title="MyName";
      this._freeapi.Post(opost).subscribe(
        (data) =>
        {
          this.AddedArr = data;
        },
      (error) =>
      {
       this.errorMsg= error.message; 
      }
      );


      var opost1 = new Posts();
      opost1.body ="Hi Priyam1";
      opost1.userId =1;
      opost1.title="MyName1";
      this._freeapi.Put(opost1).subscribe(
        (data) =>
        {
          this.updateItem = data;
        },
      (error) =>
      {
       this.errorMsg= error.message; 
      }
      );
  }

 


}
