import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {

  constructor(private http: HttpClient) {
  }

  getAboutDatas() {
    return this.http.get('http://localhost:3000/about/1');
  }
}
