import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http: HttpClient) {
  }

  getPartnersData() {
    return this.http.get('http://localhost:3000/partners');
  }
}
