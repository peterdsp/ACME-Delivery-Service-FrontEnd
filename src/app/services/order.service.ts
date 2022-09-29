import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'http://localhost:8080/accountOrders';
  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get(this.baseUrl+ '/'+ 2);
  }
}
