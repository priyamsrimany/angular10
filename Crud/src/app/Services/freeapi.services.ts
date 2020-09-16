import { Injectable } from '@angular/core';
import { Observable,throwError, from } from 'rxjs';
import { HttpClient,HttpErrorResponse,HttpParams } from '@angular/common/http';
import { catchError,retry } from 'rxjs/operators';

import {Posts} from '../Classes/posts';


@Injectable()
export class FreeApiServices
{
    constructor(private httpClient: HttpClient)
    {}
    handleError(err:HttpErrorResponse)
    {
        return throwError(err);
    }

    getComments(): Observable<any>
    {
       return this.httpClient.get("http://jsonplaceholder.typicode.com/posts/1/comments")
       .pipe(
           retry(1),
        catchError(this.handleError)
        );
    }
    getCommentsById() : Observable<any>
    {
        let parVal = new HttpParams().set('userId','1');
        return this.httpClient.get("http://jsonplaceholder.typicode.com/posts",{params:parVal})
        .pipe(retry(1),
        catchError(this.handleError));
    }
    Post(opost:Posts): Observable<any>
    {
        return this.httpClient.post("http://jsonplaceholder.typicode.com/posts",opost)
        .pipe(retry(1),
        catchError(this.handleError))
    }
    Put(opost:Posts):Observable<any>
    {
        return this.httpClient.put("http://jsonplaceholder.typicode.com/posts/1",opost)
        .pipe(retry(1),
        catchError(this.handleError))
    }
}

