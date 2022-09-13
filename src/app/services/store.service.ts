import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  baseUrl = 'http://localhost:8080/stores';

  constructor(private http: HttpClient) { }

  getTopStores(reportTopStores:string){
    return this.http.get(this.baseUrl + '/' + reportTopStores);
  }

  getTopStoreProducts(reportTop10StoreProducts:string){
    return this.http.get(this.baseUrl + '/' + reportTop10StoreProducts);
  }

  getAllStores() {
    return this.http.get(this.baseUrl);
  }

  // getStoresById(id:number) {
  //   return this.http.get(this.baseUrl + '/' +id);
  // }
}
