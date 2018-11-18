import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = '';
  public bg_img;
  public siteName = '';
  public vehicle = {
    name: '環狀輕軌',
    area: '全市',
    date: '2015 Oct ~ Now',
    des: '高雄輕軌全線為低月台、低底盤車輛，為貼心設計的高現代化系統。以象徵高雄「水」與「綠」的白色與珍珠綠色，營造出低碳環保、活力海洋首都的氣息，是高雄亮眼的新移動地標！',
    img: '../../assets/img/home/vehicle/lightrail.jpg',
    icon: '../../assets/img/home/vehicle/traffic_lightrail_blue.svg',
    url: 'https://khh.travel/Article.aspx?a=2058&l=1',
  };
  public dangerousVideoUrl = 'https://www.youtube.com/embed/';
  public yt: any = '';
  public videoUrlList = [
    'YtThNYhffkw',
    '6RFTgZSy7zc',
    '9RgXkmkLK5E',
    '3ijklJ27m14',
    'esP7yT9thHs',
    'E0rlomWm7So',
  ];

  constructor(private sanitizer: DomSanitizer) {
   }

  ngOnInit() {
    this.titleBg();
    console.log(this.videoUrlList.length);
  }

  titleBg() {
    switch (Math.round(Math.random() * 4) + 1) {
      case  1:
        this.bg_img = {backgroundImage: `url(../../assets/img/home/1.jpg)`};
        this.title = '讓我們一起體驗高雄的美';
        this.siteName = '愛河 -Kaohsiung Love River';
        break;
      case 2:
        this.bg_img = {backgroundImage: `url(../../assets/img/home/2.jpg)`};
        this.title = '輕鬆玩 隨意吃 玩遍高雄';
        this.siteName = '西子灣 - Kaohsiung Xiziwan';
        break;
      case 3:
        this.bg_img = {backgroundImage: `url(../../assets/img/home/3.jpg)`};
        this.title = '站著玩 坐著玩 躺著玩 還是高雄最好玩';
        this.siteName = '85 大樓 - 85 Sky Tower';
        break;
      case 4:
        this.bg_img = {backgroundImage: `url(../../assets/img/home/4.jpg)`};
        this.title = '藝術高雄 鮮豔奪目';
        this.siteName = '光之穹頂 - The Dome of Light';
        break;
      case 5:
        this.bg_img = {backgroundImage: `url(../../assets/img/home/5.jpg)`};
        this.title = '南部之都 河畔風情';
        this.siteName = '愛河 -Kaohsiung Love River';
        break;
      default:
        break;
    }

  }

  vehicleContent(vehicle: String) {
    if (vehicle === 'lightrail') {
      this.vehicle = {
        name: '環狀輕軌',
        area: '全市',
        date: '2015 Oct ~ Now',
        des: '高雄輕軌全線為低月台、低底盤車輛，為貼心設計的高現代化系統。以象徵高雄「水」與「綠」的白色與珍珠綠色，營造出低碳環保、活力海洋首都的氣息，是高雄亮眼的新移動地標！',
        img: '../../assets/img/home/vehicle/lightrail.jpg',
        icon: '../../assets/img/home/vehicle/traffic_lightrail_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2058&l=1',
      };
    } else if (vehicle === 'bike') {
      this.vehicle = {
        name: 'City Bike',
        area: '全市',
        date: '2009 Mar ~ Now',
        des: '高雄的公共自行車Cbike，提供了另一種欣賞高雄美景的方式探索這座不思議的都市。只要以一卡通或是信用卡，即可在高雄街頭自由的租借Cbike，開始探索這座不思議的都市。',
        img: '../../assets/img/home/vehicle/bike.jpg',
        icon: '../../assets/img/home/vehicle/traffic_bike_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2063&l=1',
      };
    } else if (vehicle === 'doubledecker') {
      this.vehicle = {
        name: '雙層巴士',
        area: '非全市',
        date: '2016 Aug ~ Now',
        des: '高雄雙層巴士，採用開頂式設計。目前路線規劃分2條路線，東西線著重在歷史文化，南北線則走向時尚。兩條路線各有不同風情，以不同的視角遊覽大高雄。',
        img: '../../assets/img/home/vehicle/doubledecker.jpg',
        icon: '../../assets/img/home/vehicle/traffic_doubledecker_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=7771&l=1',
      };
    } else if (vehicle === 'bus') {
      this.vehicle = {
        name: '觀光公車',
        area: '全市',
        date: '',
        des: '高雄文化觀光公車帶著您專遊高雄知名觀光景點。包含三條文化觀光公車：哈瑪星文化公車、舊城文化公車、鳳山文化公車及台灣好行-大樹祈福公車。可供遊客一票暢玩大高雄。',
        img: '../../assets/img/home/vehicle/bus.jpg',
        icon: '../../assets/img/home/vehicle/traffic_bus_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2064&l=1',
      };
    } else if (vehicle === 'loveboat') {
      this.vehicle = {
        name: '太陽能愛之船',
        area: '愛河沿線',
        date: '2016 Jun ~ Now',
        des: '使用太陽能船，無油味！零噪音！提升搭乘的舒適感。夜晚時船身有LED燈光，能吸引魚群跟隨，幸運時還能看到鳥類棲息在橋下溫馨的畫面，全程還有熱情的導覽人員，帶您認識高雄港。',
        img: '../../assets/img/home/vehicle/loveboat.jpg',
        icon: '../../assets/img/home/vehicle/traffic_loveboat_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2064&l=1',
      };
    } else if (vehicle === 'ships') {
      this.vehicle = {
        name: '渡輪',
        area: '非全市',
        date: '',
        des: '帶有點歷史韻味的渡輪，是高雄本地前往旗津最重要的一項交通工具，如今更是成為高雄觀光體驗的特色之一。不只可帶您前往美麗旗津，還可一併將您心愛的機車及單車運送過岸！。',
        img: '../../assets/img/home/vehicle/ships.jpg',
        icon: '../../assets/img/home/vehicle/traffic_ships_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2062&l=1',
      };
    } else if (vehicle === 'yacht') {
      this.vehicle = {
        name: '文化遊艇',
        area: '非全市',
        date: '',
        des: '高雄文化遊艇，帶您航行於高雄必玩三大景點。串聯「打狗英國領事館文化園區」、「駁二藝術特區」與「紅毛港文化園區」的航班，打造5條航班，共同目睹歷史古韻與時下流行文創的新火花。',
        img: '../../assets/img/home/vehicle/yacht.jpg',
        icon: '../../assets/img/home/vehicle/traffic_yacht_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2064&l=1',
      };
    } else if (vehicle === 'duckboat') {
      this.vehicle = {
        name: '鴨子船',
        area: '非全市',
        date: '2013 ~ Now',
        des: '水陸觀光車為「水陸兩用車（Duck Tour）」，因一輛水陸兩用車即可上山下海，讓遊客體驗「陸上行舟」，享受搭車、搭船二合一之樂趣，深受觀光客喜愛。',
        img: '../../assets/img/home/vehicle/duckboat.jpg',
        icon: '../../assets/img/home/vehicle/traffic_duckboat_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2064&l=1',
      };
    } else if (vehicle === 'ferry') {
      this.vehicle = {
        name: '觀光郵輪',
        area: '非全市',
        date: '',
        des: '高雄港為國際貨運港口，在高雄具有舉足輕重的重要地位。搭乘高雄觀光遊輪，透過深度導覽介紹，了解高雄港過往的輝煌成就與繁華歷史，欣賞這座不思議的海洋首都。',
        img: '../../assets/img/home/vehicle/ferry.jpg',
        icon: '../../assets/img/home/vehicle/traffic_ferry_blue.svg',
        url: 'https://khh.travel/Article.aspx?a=2054&l=1',
      };
    }
    console.log(`變成輕軌 ${vehicle}`);
  }

  ytEmbed(videoUrl: String) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoUrl}`);
  }

}
