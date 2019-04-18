import {Component, OnInit} from '@angular/core';
import {AboutPageService} from '../shared/about-page.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  datas: any = [];

  constructor(private aboutPage: AboutPageService) {
  }

  ngOnInit() {
    this.aboutPage.getAboutDatas().subscribe(data => {
      this.datas = data;
    });
  }


}


