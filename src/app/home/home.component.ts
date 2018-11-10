import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // images = ['3', 4, 5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = ['https://khh.travel/FileAttPic.ashx?l=1&id=142&w=2048&h=2048',
            'https://khh.travel/FileAttPic.ashx?l=1&id=607&w=2048&h=2048',
            'http://www.5658.com.tw/db4/blogs/0913569883/image/85-1.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
