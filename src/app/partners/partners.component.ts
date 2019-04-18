import {Component, OnInit} from '@angular/core';
import {PartnersService} from '../shared/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  datas: any = [];

  constructor(private partnersSerice: PartnersService) {
  }

  ngOnInit() {
    this.partnersSerice.getPartnersData().subscribe(data => {
      this.datas = data;
    });
  }

}
