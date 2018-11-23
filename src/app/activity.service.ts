import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivityProgram } from './activity-program';
import { ActivityNogovArt } from './activity-nogov-art';
import { ActivityNews } from './activity-news';
import { ActivityLibrary } from './activity-library';
import { ArtWork } from './artwork';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }


  getActivityProgramData(): Observable<ActivityProgram[]> {
    console.log('Get Program Data');
    return this.http.get<ActivityProgram[]>('https://opendata.khcc.gov.tw/public/OD_art_program.ashx')
          .pipe(catchError(this.errorHandler));
  }

  getActivityNogovArtData(): Observable<ActivityNogovArt[]> {
    console.log('Get No Gov Art Data');
    return this.http.get<ActivityNogovArt[]>('https://opendata.khcc.gov.tw/public/OD_khcc_pubart.ashx')
          .pipe(catchError(this.errorHandler));
  }

  getActivityNewsData(): Observable<ActivityNews[]> {
    console.log('Get KHCC News Data');
    return this.http.get<ActivityNews[]>('https://opendata.khcc.gov.tw/public/OD_khcc_news.ashx')
          .pipe(catchError(this.errorHandler));
  }

  getActivityLibraryData(): Observable<ActivityLibrary[]> {
    console.log('Get Library Data');
    return this.http.get<ActivityLibrary[]>('https://opendata.khcc.gov.tw/public/OD_ksml_news.ashx')
          .pipe(catchError(this.errorHandler));
  }

  getArtWorkData(): Observable<ArtWork[]> {
    console.log('Get ArtWork Data');
    return this.http.get<ArtWork[]>('https://opendata.khcc.gov.tw/public/OD_PublicArt.ashx')
          .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
