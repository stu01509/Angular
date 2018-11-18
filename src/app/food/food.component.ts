import { Component, OnInit } from '@angular/core';
import { FoodService } from './../food.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public wHeight;
  public foodList = [];
  public tempList = [];
  public errMsg = '';
  public itemValue = 9;
  public searchValue;

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

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getFoodData()
      .subscribe(data => this.foodList = data,
        error => this.errMsg);
    this.foodService.getFoodData()
      .subscribe(data => this.tempList = data,
        error => this.errMsg);
  }

  showList() {
    console.log(this.foodList.length);
    console.log(this.showList);
    // console.log():
  }
  addList() {
    this.itemValue += 9;
    console.log(this.foodList.length);
  }

  search(event) {
    if (event.target.value.length === 0) {
      this.foodService.getFoodData()
      .subscribe(data => this.tempList = data,
        error => this.errMsg = error);
    } else {
      this.tempList = this.foodList.filter(res => {
        // return res.Name.match(this.searchValue);
        console.log(res.Name, event.target.value);
        console.log(String(res.Name).includes(event.target.value.trim()));
        return res.Name.includes(event.target.value);
      });
    }
    console.log(this.searchValue);
  }

  showModal(food) {
    console.log(food);
    this.modal.Name = food.Name;
    this.modal.id = food.id;
    this.modal.Name = food.Name;
    this.modal.Zone = food.Zone;
    this.modal.Toldescribe = food.Toldescribe;
    this.modal.Description = food.Description;
    this.modal.Tel = food.Tel;
    this.modal.Add = food.Add;
    this.modal.Zipcode = food.Zipcode;
    this.modal.Travellinginfo = food.Travellinginfo;
    this.modal.Opentime = food.Opentime;
    this.modal.Picture1 = food.Picture1;
    this.modal.Picdescribe1 = food.Picdescribe1;
    this.modal.Picture2 = food.Picture2;
    this.modal.Picdescribe2 = food.Picdescribe2;
    this.modal.Picture3 = food.Picture3;
    this.modal.Picdescribe3 = food.Picdescribe3;
    this.modal.Map = food.Map;
    this.modal.Gov = food.Gov;
    this.modal.Px = food.Px;
    this.modal.Py = food.Py;
    this.modal.Orgclass = food.Orgclass;
    this.modal.Class1 = food.Class1;
    this.modal.Class2 = food.Class2;
    this.modal.Class3 = food.Class3;
    this.modal.Level = food.Level;
    this.modal.Website = food.Website;
    this.modal.Parkinginfo = food.Parkinginfo;
    this.modal.Parkinginfo_px = food.Parkinginfo_px;
    this.modal.Parkinginfo_py = food.Parkinginfo_py;
    this.modal.Ticketinfo = food.Ticketinfo;
    this.modal.Remarks = food.Remarks;
    this.modal.Keyword = food.Keyword;
    this.modal.Changetime = food.Changetime;
  }



}
