import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  allStoresUrl: string = 'localhost:8080/stores';
  reportTopStoresUrl: string = 'https://localhost:4200/stores/reportTopStores';
  reportTopStoreProductsUrl: string = 'http://localhost:8080/stores/reportTop10StoreProducts';

  constructor(private http: HttpClient) { }

  getTopStores(){
    return this.http.get(this.reportTopStoresUrl);
  }

  getTopStoreProducts(){
    return this.http.get(this.reportTopStoresUrl);
  }

  getAllStores() {
    return this.http.get(this.allStoresUrl);
  }

}
