import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Site } from './site';


@Injectable({
  providedIn: 'root'
})
export class SiteService {
  // headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');

  // private apiUrl = 'http://opendata2.epa.gov.tw/AQI.json';
  private apiUrl = 'http://www.c-bike.com.tw/xml/StationListEnOpenData.aspx';

  constructor(private http: HttpClient) { }

  getEmployee() {
    return  [
      {'id': 1, 'name': 'Cliff', 'age': 18},
      {'id': 2, 'name': 'Dino', 'age': 17},
      {'id': 3, 'name': 'BINO', 'age': 16},
      {'id': 4, 'name': 'Chin', 'age': 18},
    ];
  }

  getSiteData(): Observable<Site[]> {
    return this.http.get<Site[]>('../../assets/api/site.json')
        .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }


  // httpGetXml() {
  //   this.http.get('https://khh.travel/foodxml.aspx', { responseType: 'text' }).subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // httpGetXmlDemo() {
  //   this.http.get('', { headers: this.headers, responseType: 'json' }).subscribe(response => {
  //      console.log(response); });
  // }
}
