import {Component, OnInit} from '@angular/core';
import {HomePageService} from '../shared/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  datas:any = [];

  constructor(private homePageService: HomePageService) {
  }

  ngOnInit() {
    this.homePageService.getHomeDatas().subscribe(data => {
      this.datas = data;
    });
  }

}
