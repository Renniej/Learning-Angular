import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

import { throwError, Observable } from 'rxjs' 
import { catchError } from 'rxjs/operators'﻿

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private _url : string = "./assets/data/employee.json"

  getEmployees() : Observable<IEmployee[]>
  
  {
       
        return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
       
  }


  errorHandler(error : HttpErrorResponse){ 
     console.log('Handling error locally and rethrowing it...', error);
      return throwError(error.message || "Server error");
  }


}
