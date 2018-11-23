import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IGWallService {

  constructor(private http: HttpClient) { }

  getIgWallData(search) {
    return this.http.get(`https://www.instagram.com/explore/tags/${search}/?__a=1`)
          .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }


}
