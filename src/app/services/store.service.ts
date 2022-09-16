import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  baseUrl = 'http://localhost:8080/stores';

  constructor(private http: HttpClient) { }

  getTopStores(){
    return this.http.get(this.baseUrl + '/' + 'reportTopStores');
  }

  getTopStoreProducts(){
    return this.http.get(this.baseUrl + '/' + 'reportTop10StoreProducts');
  }

  getAllStores() {
    return this.http.get(this.baseUrl + '/' +'lazy');
  }

  getStoresById(key:number) {
    return this.http.get(this.baseUrl + '/' + key);
  }
}
