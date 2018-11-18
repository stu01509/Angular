import { Component, OnInit } from '@angular/core';

import { BusService } from './../bus.service';


@Component({
  selector: 'app-bus-info',
  templateUrl: './bus-info.component.html',
  styleUrls: ['./bus-info.component.css']
})
export class BusInfoComponent implements OnInit {

  public busRouteList: any = [];
  public errMsg = '';
  public itemValue = 10;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.busService.getAllRoute()
      .subscribe(data => this.busRouteList = data['body'],
        error => this.errMsg);

  }

  showAll() {
    console.log(this.busRouteList);
  }

}
