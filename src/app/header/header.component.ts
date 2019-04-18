import {Component, OnInit} from '@angular/core';
import {AboutPageService} from '../shared/about-page.service';
import {HeaderService} from '../shared/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  datas: any = [];
  slider: any = [];

  constructor(private aboutPageServer: AboutPageService) {
  }

  ngOnInit() {
    this.aboutPageServer.getAboutDatas().subscribe(data => {
      this.datas = data;
    });
  }

}
