import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  allStoresUrl: string = 'http://localhost:8080/STORES';
  reportTopStoresUrl: string = 'https://localhost:8080/STORES/reportTopStores';
  reportTopStoreProductsUrl: string = 'http://localhost:8080/STORES/reportTop10StoreProducts';

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
