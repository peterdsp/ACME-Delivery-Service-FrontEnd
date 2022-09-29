import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl = 'http://localhost:8080/orders/accountOrders';
  constructor(private http: HttpClient) { }

  getOrders(id:number){
    return this.http.get(this.baseUrl+ '/'+ id);
  }
  
}
