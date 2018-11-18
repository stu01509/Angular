import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public activityList: any = [];
  public errMsg = '';
  public itemValue = {
    'program': 9,
    'nogov': 9,
    'news': 9,
    'library': 9,
    'art': 9,
  };

  public modal = {
    titile : '',
    imgUrl: '',
    desc: '',
    add: '',
    group: '',
    tel: '',
    date: '',
    endTime: '',
    id: '',
    addDetail: '',
    startTime: '',
    ticketPrice: '',
    ticketUrl: ''
  };


  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivityProgramData()
      .subscribe(data => this.activityList = data.reverse() ,
        error => this.errMsg);
  }
  activityProgramData() {
    this.activityService.getActivityProgramData()
      .subscribe(data => this.activityList = data.reverse() ,
        error => this.errMsg);
  }

  noGovArtData() {
    this.activityService.getActivityNogovArtData()
      .subscribe(data => this.activityList = data,
        error => this.errMsg);
  }

  activityNewsData() {
    this.activityService.getActivityNewsData()
      .subscribe(data => this.activityList = data,
        error => this.errMsg);
  }

  activityLibraryData() {
    this.activityService.getActivityLibraryData()
      .subscribe(data => this.activityList = data,
        error => this.errMsg);
  }

  artWorkData() {
    this.activityService.getArtWorkData()
      .subscribe(data => this.activityList = data,
        error => this.errMsg);
  }

  addList(type: String) {
    if (type === 'program') {
      this.itemValue.program += 9;
    } else if (type === 'nogov') {
      this.itemValue.nogov += 9;
    } else if (type === 'news') {
      this.itemValue.news += 9;
    } else if (type === 'library') {
      this.itemValue.library += 9;
    } else if (type === 'art') {
      this.itemValue.art += 9;
    }
    console.log(this.activityList.length);
  }

  showModal(type, activityData) {
    console.log(type, activityData);
    if (type === 'program') {

    } else if (type === 'nogov') {

    } else if (type === 'news') {

    } else if (type === 'library') {

    } else if (type === 'art') {

    }


  }
}
