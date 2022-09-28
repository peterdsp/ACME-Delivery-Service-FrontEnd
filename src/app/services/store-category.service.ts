import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreCategoryService {

  baseUrl = 'http://localhost:8080/storecategories';

  constructor(private http: HttpClient) { }

  getStoreCategories(){
    return this.http.get(this.baseUrl);
  }
}
