import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private http: HttpClient){
    url: string= 'http://localhost:3000/delivery'; εδω θα μπει το homepage url του api, δηλαδη του postman
  }
  
  getDelivery(){
    return this.http.get(this.url);
  }
}
