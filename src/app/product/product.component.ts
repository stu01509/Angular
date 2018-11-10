import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

class APIData {
  Name: number;
  Toldescribe: any;
  Description: any;
  Add: any;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  APIDataObservable: Observable<APIData[]>;

  constructor(private http: HttpClient) { }

  apiUrl = 'http://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json';
  demoName: any = 'XDD';

  ngOnInit() {
    // return
    // this.demoName = this.http.get(this.apiUrl);
    // console.log(...this.demoName);

    // this.APIDataObservable = this.http
    //         .get<APIData[]>(this.apiUrl)
    //         .subscribe((data: APIData) => this.demoName = { ...data });
    //         // .(console.log);
    // console.log(this.apiDataObservable);
  }


  getConfig() {
    return this.http.get(this.apiUrl);
  }



}
