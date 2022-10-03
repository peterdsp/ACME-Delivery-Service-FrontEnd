import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

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
    return this.http.get(this.baseUrl + '/' +'all');
  }

  getStoresById(key:number) {
    return this.http.get(this.baseUrl + '/' + key);
  }

  getTopStoresPerCategory(key:number){
    return this.http.get(this.baseUrl + '/' + 'reportTopStoresPerCategory' + '/' + key);
  }

  getStoresByNameOrCategory(nameOrCategory:any) {
    return this.http.get(this.baseUrl + '/' + 'name-category' + '/' + nameOrCategory);
  }
}
