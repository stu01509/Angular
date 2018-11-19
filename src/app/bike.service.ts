import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BikeData } from './bike';


@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  // getBikeData(): Observable<BikeData[]> {
  //   console.log('Get Bike Data');
  //   return this.http.get<BikeData[]>(
  //     'https://www.instagram.com/explore/tags/%E9%AB%98%E9%9B%84%E6%B8%AF/?__a=1')
  //         .pipe(catchError(this.errorHandler));
  // }

  getBikeData() {
    console.log('Get Bike Data');
    return this.http.get(
      'https://www.instagram.com/explore/tags/%E9%AB%98%E9%9B%84%E6%B8%AF/?__a=1')
          .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }


}
