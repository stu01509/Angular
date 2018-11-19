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
    act: '',
    tel: '',
    date: '',
    endTime: '',
    id: '',
    addDetail: '',
    startTime: '',
    ticketPrice: '',
    ticketUrl: '',
    website: '',
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

      this.modal.titile  = activityData.PRGNAME;
      this.modal.imgUrl = activityData.IMAGE1;
      this.modal.desc = activityData.ITEMDESC;
      this.modal.tel = activityData.PRGCONT;
      this.modal.add = activityData.ORGNAME;
      this.modal.addDetail = activityData.PRGPLACE;
      this.modal.act = activityData.PRGACT;
      this.modal.group = activityData.PRGAG;
      this.modal.date = activityData.PRGDATE;
      this.modal.startTime = activityData.PRGSTIME;
      this.modal.endTime = activityData.PRGETIME;
      this.modal.id = activityData.PRGID;
      this.modal.ticketPrice = activityData.PRGTICKET;
      this.modal.ticketUrl = activityData.TICKETSYSURL;

    } else if (type === 'nogov') {

      this.modal.titile  = activityData.PUBART_TITLE;
      this.modal.imgUrl = activityData.PUBART_IMAGE;
      this.modal.desc = activityData.PUBART_DESC;
      this.modal.tel = activityData.PRGCONT;
      this.modal.add = activityData.ORGNAME;
      this.modal.addDetail = activityData.PRGPLACE;
      this.modal.act = activityData.PUBART_ACTOR;
      this.modal.group = activityData.PUBART_ACTUNIT;
      this.modal.date = activityData.PUBART_ACTTOP;
      this.modal.startTime = activityData.PRGSTIME;
      this.modal.endTime = activityData.PRGETIME;
      this.modal.id = activityData.PUBART_INDEX;
      this.modal.ticketPrice = activityData.PUBART_TICKETPRICE;
      this.modal.ticketUrl = activityData.PUBART_TICKETURL;
      this.modal.website = activityData.PUBART_URL;

    } else if (type === 'news') {

      this.modal.titile  = activityData.NEWS_TITLE;
      this.modal.imgUrl = activityData.NEWS_IMAGE;
      this.modal.desc = activityData.NEWS_DESC;
      this.modal.act = activityData.NEWS_ACTUNIT;
      this.modal.group = activityData.NEWS_MANAGEUNIT;
      this.modal.date = activityData.NEWS_ENDDATE;
      this.modal.startTime = activityData.PRGSTIME;
      this.modal.endTime = activityData.PRGETIME;
      this.modal.id = activityData.NEWS_INDEX;
      this.modal.ticketPrice = activityData.PUBART_TICKETPRICE;
      this.modal.ticketUrl = activityData.NEWS_PRICE;
      this.modal.website = activityData.NEWS_URL;

    } else if (type === 'library') {

      this.modal.titile  = activityData.Title;
      this.modal.desc = activityData.Content;
      this.modal.tel = activityData.PRGCONT;
      this.modal.add = activityData.Unit;
      this.modal.group = activityData.Unit;
      this.modal.date = activityData.EndDate;
      this.modal.id = activityData.ID;
      this.modal.website = activityData.OriginalURL;

    } else if (type === 'art') {

      this.modal.titile  = activityData.PublicArt_Name;
      this.modal.imgUrl = activityData.PublicArt_Image[0];
      this.modal.desc = activityData.PublicArt_Desc;
      this.modal.add = activityData.PublicArt_Place;
      this.modal.id = activityData.PublicArt_INDEX;
    }


  }
}
