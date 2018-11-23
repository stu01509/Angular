import { Component, OnInit } from '@angular/core';
import { SiteService } from './../site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  public siteList = [];
  public tempList = [];
  public errMsg = '';
  public itemValue = 9;
  public searchValue;
  public username = '';

  public modal = {
    id: '' ,
    Name: '' ,
    Zone: '' ,
    Toldescribe: '',
    Description: '',
    Tel: '' ,
    Add: '' ,
    Zipcode: '' ,
    Travellinginfo: '' ,
    Opentime: '' ,
    Picture1: '' ,
    Picdescribe1: '' ,
    Picture2: '' ,
    Picdescribe2: '' ,
    Picture3: '' ,
    Picdescribe3: '' ,
    Map: '' ,
    Gov: '' ,
    Px: '' ,
    Py: '' ,
    Orgclass: '' ,
    Class1: '' ,
    Class2: '' ,
    Class3: '' ,
    Level: '' ,
    Website: '' ,
    Parkinginfo: '' ,
    Parkinginfo_px: '' ,
    Parkinginfo_py: '' ,
    Ticketinfo: '' ,
    Remarks: '' ,
    Keyword: '' ,
    Changetime: '',
  };
  constructor(private siteService: SiteService) { }

  ngOnInit() {
    // Source Data
    this.siteService.getSiteData()
      .subscribe(data => this.siteList = data,
        error => this.errMsg = error);
    // Filter Data
    this.siteService.getSiteData()
      .subscribe(data => this.tempList = data,
        error => this.errMsg = error);
  }
  addList() {
    this.itemValue += 9;
    console.log(this.siteList.length);
  }

  search(event) {
    if (event.target.value.length === 0) {
      this.siteService.getSiteData()
      .subscribe(data => this.tempList = data,
        error => this.errMsg = error);
    } else {
      this.tempList = this.siteList.filter(res => {
        // return res.Name.match(this.searchValue);
        console.log(res.Name, event.target.value);
        console.log(String(res.Name).includes(event.target.value.trim()));
        return res.Name.includes(event.target.value);
      });
    }
    console.log(this.searchValue);
  }

  showModal(site) {
    console.log(site);
    this.modal.Name = site.Name;
    this.modal.id = site.id;
    this.modal.Name = site.Name;
    this.modal.Zone = site.Zone;
    this.modal.Toldescribe = site.Toldescribe;
    this.modal.Description = site.Description;
    this.modal.Tel = site.Tel;
    this.modal.Add = site.Add;
    this.modal.Zipcode = site.Zipcode;
    this.modal.Travellinginfo = site.Travellinginfo;
    this.modal.Opentime = site.Opentime;
    this.modal.Picture1 = site.Picture1;
    this.modal.Picdescribe1 = site.Picdescribe1;
    this.modal.Picture2 = site.Picture2;
    this.modal.Picdescribe2 = site.Picdescribe2;
    this.modal.Picture3 = site.Picture3;
    this.modal.Picdescribe3 = site.Picdescribe3;
    this.modal.Map = site.Map;
    this.modal.Gov = site.Gov;
    this.modal.Px = site.Px;
    this.modal.Py = site.Py;
    this.modal.Orgclass = site.Orgclass;
    this.modal.Class1 = site.Class1;
    this.modal.Class2 = site.Class2;
    this.modal.Class3 = site.Class3;
    this.modal.Level = site.Level;
    this.modal.Website = site.Website;
    this.modal.Parkinginfo = site.Parkinginfo;
    this.modal.Parkinginfo_px = site.Parkinginfo_px;
    this.modal.Parkinginfo_py = site.Parkinginfo_py;
    this.modal.Ticketinfo = site.Ticketinfo;
    this.modal.Remarks = site.Remarks;
    this.modal.Keyword = site.Keyword;
    this.modal.Changetime = site.Changetime;
  }

  scrollTo(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
