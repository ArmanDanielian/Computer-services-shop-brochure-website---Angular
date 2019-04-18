import {Component, OnInit} from '@angular/core';
import {AboutPageService} from '../shared/about-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datas: any = [];

  constructor(private aboutPageService: AboutPageService) {
  }

  ngOnInit() {
    this.aboutPageService.getAboutDatas().subscribe(data => {
      this.datas = data;
    });
  }

}
