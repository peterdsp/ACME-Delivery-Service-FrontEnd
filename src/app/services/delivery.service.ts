import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient){ }

  url: string = 'http://localhost:8080/stores';

  getDelivery(){
    return this.http.get(this.url);
  }
}
