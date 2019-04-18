import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePageService {

  constructor(private http: HttpClient) {
  }

  getServiceDatas() {
    return this.http.get('http://localhost:3000/service');
  }

}
