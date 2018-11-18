import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BusRoute } from './bus-route';


@Injectable({
  providedIn: 'root'
})
export class BusService {


  constructor(private http: HttpClient) { }



  getAllRoute(): Observable<BusRoute[]> {
    console.log('Get Bus Route Data');
    return this.http.get<BusRoute[]>('http://localhost:3000/todo')
      .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
