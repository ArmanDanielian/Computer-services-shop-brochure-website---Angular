import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopArajarkPageService {

  constructor(private http: HttpClient) {
  }

  getTopOfferDatas() {
    return this.http.get('http://localhost:3000/topOffer');
  }
}
