import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private http: HttpClient) { }

  getTopStores(){
    return this.http.get('https://localhost:4200/stores/reportTopStores');
  }

  getTopStoreProducts(){
    return this.http.get('http://localhost:8080/stores/reportTop10StoreProducts')
  }
}
