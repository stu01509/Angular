import { Component, OnInit } from '@angular/core';

import { BikeService } from './../bike.service';


@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {

  public bikeList = [];
  public errMsg = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeService.getBikeData()
      .subscribe(data => this.bikeList = data,
        error => this.errMsg);
  }

  showAll() {
    console.log(this.bikeList);
  }

}
