import {Component, OnInit} from '@angular/core';
import {TopArajarkPageService} from '../shared/top-arajark-page.service';

@Component({
  selector: 'app-top-arajark',
  templateUrl: './top-arajark.component.html',
  styleUrls: ['./top-arajark.component.css']
})
export class TopArajarkComponent implements OnInit {

  tops: any = [];

  constructor(private topArajarkPageService: TopArajarkPageService) {
  }

  ngOnInit() {
    this.topArajarkPageService.getTopOfferDatas().subscribe(data => {
      this.tops = data;
    });
  }

}
