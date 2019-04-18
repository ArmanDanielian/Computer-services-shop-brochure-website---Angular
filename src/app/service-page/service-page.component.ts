import {Component, OnInit} from '@angular/core';
import {ServicePageService} from '../shared/service-page.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  services: any = [];

  constructor(private servicePageService: ServicePageService) {
  }

  ngOnInit() {
    this.servicePageService.getServiceDatas().subscribe(data => {
      this.services = data;
    });
  }

}
