import { Component, OnInit } from '@angular/core';
import { IGWallService } from './../igwall.service';


@Component({
  selector: 'app-ig',
  templateUrl: './ig.component.html',
  styleUrls: ['./ig.component.css']
})


export class IGComponent implements OnInit {

  // public searchItem = [1, 2, 3, 4, 5, 6, 7].forEach(() => (this.site[Math.round(Math.random() * 40)]));

  public site = ['高雄景點', '高雄美食', '夢時代', '夢時代購物中心', '哈瑪星溜滑梯', '草衙道', '魯閣草衙道',
                '高雄夜景', '美麗島站', '85大樓', '高雄', '衛武營國家藝術文化中心', '衛武營', '凹子底森林公園',
                '凹子底', '真愛碼頭', '高雄輕軌', '旗津', '棧貳庫', '棧二庫', '棧貳庫kw2', ' 高雄漢神百貨',
                '大立百貨', '大立空中樂園', '打狗英國領事館', '旗山', '旗山地景橋', '柴山', '大東文化藝術中心',
                '駁二藝術特區', '駁二', '高雄曼哈頓', '高雄火車站', '高雄捷運站', '鹽埕埔站', '楠梓', '左營', '三民',
                '美麗島', '光之穹頂', '西子灣', '愛河'];

  public searchItem = ['', '', '', '', '', '', ''];

  public igData: any = [];
  public topPost: any = [];
  public normalPost: any = [];
  public itemValue = 9;
  public searchBar = '';

  public modal = {
    desc: '',
    time: '',
    like: '',
    comment: '',
    link: '',
    pic: '',
  };

  constructor(private igWallService: IGWallService) { }

  ngOnInit() {
    this.igWallService.getIgWallData(this.site[Math.round(Math.random() * 42)])
      .subscribe(data => {
        this.igData = data['graphql'];
        this.topPost = data['graphql'].hashtag.edge_hashtag_to_top_posts.edges;
        this.normalPost = data['graphql'].hashtag.edge_hashtag_to_media.edges;
      },
        error => console.log(error));

    console.log(this.searchItem[0]);

    for (let i = 0; i < 9; i++) {
      this.searchItem[i] = this.site[Math.round(Math.random() * 42)];
    }
  }

  addList() {
    this.itemValue += 9;
    console.log(this.normalPost.length);
  }

  showModal(post) {
    console.log(post);
    this.modal.desc = post.node.edge_media_to_caption.edges[0].node.text;
    this.modal.like = post.node.edge_liked_by.count;
    this.modal.comment = post.node.edge_media_to_comment.count;
    this.modal.link = 'https://www.instagram.com/p/' + post.node.shortcode;
    this.modal.pic = post.node.thumbnail_src;
  }

  searchIG() {
    this.itemValue = 9;
    this.topPost = [];
    this.normalPost = [];
    console.log(this.searchBar);
    this.igWallService.getIgWallData(this.searchBar)
      .subscribe(data => {
        this.igData = data['graphql'];
        this.topPost = data['graphql'].hashtag.edge_hashtag_to_top_posts.edges;
        this.normalPost = data['graphql'].hashtag.edge_hashtag_to_media.edges;
      },
        error => console.log(error));
  }

  btnSearch(searchValue) {
    this.itemValue = 9;
    this.topPost = [];
    this.normalPost = [];
    console.log(`按鈕搜尋 ${searchValue}`);

    this.igWallService.getIgWallData(searchValue)
    .subscribe(data => {
      this.igData = data['graphql'];
      this.topPost = data['graphql'].hashtag.edge_hashtag_to_top_posts.edges;
      this.normalPost = data['graphql'].hashtag.edge_hashtag_to_media.edges;
    },
      error => console.log(error));
  }

  scrollTo(el) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
